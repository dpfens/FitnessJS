google.charts.load('current', {
    //'packages': ['corechart']
    'packages': ['line']
});


var timeConverter = {
    multipliers: [1, 60, 3600],
    fromString: function(time) {
        var parts = time.split(":"),
            seconds = 0,
            j = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
            var part = Number(parts[i]),
                multiplier = this.multipliers[j]
            seconds += part * multiplier;
            j++;
        }
        return seconds;
    },
    toString: function(seconds, trim) {
        var trim = trim || false,
            sec_num = Number(seconds, 10), // don't forget the second param
            hours = Math.floor(sec_num / 3600),
            minutes = Math.floor((sec_num - (hours * 3600)) / 60),
            seconds = sec_num - (hours * 3600) - (minutes * 60),
            time = "";

        seconds = round(seconds, 2);

        if (minutes < 10 && hours > 0) {
            minutes = "0" + minutes;
        }
        if (seconds < 10 && (minutes > 0 || hours > 0)) {
            seconds = "0" + seconds;
        }

        if (trim) {
            return trim(hours, minutes, seconds);
        }
        return hours + ":" + minutes + ":" + seconds;

        function trim(hours, minutes, seconds) {
            var units = [hours, minutes, seconds],
                time = '';
            for (var i = 0; i < units.length; i++) {
                // if greater than 0, insert into outputstring
                if (units[i] && units[i] !== "00") {
                    time += units[i];
                    if (units[i] !== seconds) {
                        time += ':';
                    }
                }
            }
            return time;
        }

    }
}

var units = {
    distance: {
        options: [{
            name: "Meters",
            value: "m"
        }, {
            name: "Kilometers",
            value: "km"
        }, {
            name: "Miles",
            value: "miles"
        }, {
            name: "Feet",
            value: "feet"
        }, {
            name: "Yards",
            value: "yards"
        }],
        current: storage.preferences.get('length')
    },
    time: {
        options: [{
            name: "Seconds",
            value: "s"
        }, {
            name: "Minutes",
            value: "min"
        }, {
            name: "Hours",
            value: "hrs"
        }, {
            name: "Days",
            value: "d"
        }],
        current: undefined
    }
};


if (!storage.preferences.get('length')) {
    storage.preferences.set('length', units.distance.options[0]);
}

function round(num, places) {
    var multiplier = Math.pow(10, places);
    return Math.round(num * multiplier) / multiplier;
}

function transformData(performances, distances, model) {
    var data = [];
    for (var i = 0; i < distances.length; i++) {
        var distance = distances[i],
            d2 = distance.value,
            row = [distance.name];
        for (var j = 0; j < performances.length; j++) {
            var performance = performances[j],
                t1 = performance.time.value,
                d1 = new Fit.conversion.UnitConverter(performance.distance.value, performance.distance.units.value).to("m").val(),
                model = new Fit.model.aerobic.Riegel(d1, t1),
                t2 = model.time(d2),
                formattedT2 = timeConverter.toString(t2);
            row.push(t2);
            row.push(formattedT2);
        }
        data.push(row);
    }
    return data;
}

function drawPerformanceChart(performances, events) {

    var data = new google.visualization.DataTable(),
        rows = transformData(performances, events);
    data.addColumn('string', 'Distance');

    // Loop through performances and add "Column" for each performance
    for (var i = 0; i < performances.length; i++) {
        var performance = performances[i],
            label;
        if (performance.label.length > 0) {
            label = performance.label;
        } else {
            label = performance.distance.value + performance.distance.units.value + " - " + performance.time.formatted;
        }
        data.addColumn('number', label);
        data.addColumn({
            type: 'string',
            role: 'tooltip'
        });
    }
    // [Distance, Performance 1, Performance 2, Performance 3...Performance n]
    data.addRows(rows);

    var options = {
        chart: {
            title: 'Performance Models',
            subtitle: 'in seconds',
            selecitionMode: 'multiple'
        },
        tooltip: { trigger: 'selection' },
        focusTarget: 'category',
        axes: {
            y: {
                all: {
                    format: {
                        pattern: 'decimal'
                    }
                }
            }
        },
        hAxis: {
            gridlines: {
                color: 'transparent'
            }
        },
        vAxis: {
            gridlines: {
                color: 'transparent'
            }
        },
        curveType: 'function',
        width: 1100,
        height: 500
    };

    var chart = new google.charts.Line(document.getElementById('chart'));

    chart.draw(data, options);
}

var app = new Vue({
    el: '#app',
    data: {
        performances: [],
        units: units,
        newPerformance: {
            distance: {
                value: '',
                units: units.distance.options[0]
            },
            time: {
                formatted: '',
                value: ''
            },
        },
        editingPerformance: null,
    },
    methods: {
        savePerformance: function(performance) {
            this.editingPerformance = null;
            performance.time.value = timeConverter.fromString(performance.time.formatted);
            this.drawChart();
        },
        editPerformance: function(performance) {
            this.editingPerformance = performance;
            componentHandler.upgradeDom();
        },
        addPerformance: function(event) {
            var time = this.newPerformance.time.formatted = this.newPerformance.time.formatted.trim();
            if (this.newPerformance.distance.value > 0 && time.length > 0) {
                this.newPerformance.time.value = timeConverter.fromString(time);
                this.newPerformance.label = "";
                this.newPerformance.edit = false;
                this.newPerformance.id = this.performances.length;
                this.performances.push(this.newPerformance);
                this.newPerformance = {
                    distance: {
                        value: '',
                        units: this.units.distance.current
                    },
                    time: {
                        formatted: '',
                        value: ''
                    }
                };
                this.drawChart();
            }
        },
        removePerformance: function(performance) {
            this.performances.splice(this.performances.indexOf(performance), 1);
            if(this.performances.length > 0) {
              this.drawChart();
            }
        },
        setTimeUnit: function(performance, unit) {
            var oldTimeUnits = performance.time.units,
                currentTimeValue = performance.time.value;
            performance.time.units = unit;
            if (currentTimeValue && oldTimeUnits) {
                performance.time.value = new Fit.conversion.UnitConverter(currentTimeValue, oldTimeUnits).to(unit.value).val();
            }
        },
        setDistanceUnit: function(performance, unit) {
            var oldDistanceUnits = performance.distance.units.value,
                currentDistanceValue = performance.distance.value;
            performance.distance.units = this.units.distance.current = unit;
            if (currentDistanceValue && oldDistanceUnits) {
                performance.distance.value = new Fit.conversion.UnitConverter(currentDistanceValue, oldDistanceUnits).to(unit.value).val();
            }
        },
        drawChart: function() {
            var distances = [{
                name: '55m',
                value: 55
            }, {
                name: '100m',
                value: 100
            }, {
                name: '200m',
                value: 200
            }, {
                name: '400m',
                value: 400
            }, {
                name: '500m',
                value: 500
            }, {
                name: '600m',
                value: 600
            }, {
                name: '800m',
                value: 800
            }, {
                name: '1000m',
                value: 1000
            }, {
                name: '1500m',
                value: 1500
            }, {
                name: '1 mile',
                value: 1609.34
            }, {
                name: '3k',
                value: 3000
            }, {
                name: '3200m',
                value: 3200
            }, {
                name: '5k',
                value: 5000
            }, {
                name: '8k',
                value: 8000
            }, {
                name: '10k',
                value: 10000
            }, {
                name: 'Half-marathon',
                value: 21082.41
            }, {
                name: 'Marathon',
                value: 42164.81
            }, ]
            drawPerformanceChart(this.performances, distances)
        }
    }
});
