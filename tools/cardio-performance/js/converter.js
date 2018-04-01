(function() {

    var snackbar = new mdc.snackbar.MDCSnackbar(document.querySelector('.mdc-snackbar')),

    shareURL = {
        facebook: function(parameters) {
            var parameters = parameters || {},
            parameters = this.parameters(parameters),
            baseURL = 'https://www.facebook.com/sharer/sharer.php',
            shareURL = window.location.href,
            parameterString = '?';
            parameters.url = shareURL;
            for(var key in parameters) {
                if(parameterString.length > 1) {
                    parameterString +='&';
                }
                parameterString += key+"="+encodeURIComponent(parameters[key]);
            }
            return baseURL + parameterString;

        },
        twitter: function(parameters) {
            var parameters = parameters || {},
            parameters = this.parameters(parameters),
            baseURL = 'https://twitter.com/intent/tweet',
            shareURL = window.location.href,
            parameterString = '?';
            parameters.url = shareURL;
            parameters.text = parameters.description;
            delete parameters.description;
            parameters.via = "DougFenstermach"
            for(var key in parameters) {
                if(parameterString.length > 1) {
                    parameterString +='&';
                }
                parameterString += key+"="+encodeURIComponent(parameters[key]);
            }
            return baseURL + parameterString;
        },
        parameters: function(parameters) {
            return {
                    title:  parameters.title || document.querySelector('#meta-title').getAttribute('content'),
                    description: parameters.description || document.querySelector('#meta-description').getAttribute('content'),
                    image: parameters.image || document.querySelector('#meta-image').getAttribute('content'),
                }
        }
    },
    timeConverter = {
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
        toString: function(seconds, trimTime) {
            var trimTime = trimTime || false,
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

            if (trimTime) {
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
    },

    queryParameters = {
        parse: function(obj) {
            times = obj.time,
                distances = obj.distance,
                dUnits = obj.dunit,
                labels = obj.label,
                length,
                performances = [];

            if (!Array.isArray(times)) {
                times = [times]
            }
            if (!Array.isArray(distances)) {
                distances = [distances]
            }
            if (!Array.isArray(dUnits)) {
                dUnits = [dUnits]
            }
            if (!Array.isArray(labels)) {
                labels = [labels]
            }
            length = times.length;

            for (var i = 0; i < dUnits.length; i++) {
                var dUnit = dUnits[i];
                for (var j = 0; j < units.distance.options.length; j++) {
                    var unit = units.distance.options[j];

                    if (dUnit === unit.value) {
                        dUnits[i] = unit;
                        break;
                    }
                }
            }

            for (var k = 0; k < length; k++) {
                var time = {
                        value: Number(times[k]),
                        formatted: timeConverter.toString(times[k], true)
                    },
                    distance = {
                        value: Number(distances[k]),
                        units: dUnits[k]
                    },
                    label = labels[k],
                    performance = {
                        distance: distance,
                        time: time,
                        label: label
                    };

                performances.push(performance);

            }

            return performances;
        },
        areValid: function(obj) {
            var detailed = detailed || false,
                times = obj.time,
                distances = obj.distance,
                dUnits = obj.dunit,
                labels = obj.label,
                fieldsExist = times && distances && dUnits && labels,
                multiple = Array.isArray(times) && Array.isArray(distances) && Array.isArray(dUnits) && Array.isArray(labels),
                single = !Array.isArray(times) && !Array.isArray(distances) && !Array.isArray(dUnits) && !Array.isArray(labels)
            isValid = false;
            if (!fieldsExist || !multiple && !single) {
                return isValid;
            }
            if (fieldsExist && multiple) {
                isValid = times.length === distances.length && distances.length === dUnits.length;
            } else if (fieldsExist && single) {
                isValid = true;
            }
            return isValid;
        }

    },

    units = {
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
        units.distance.current = units.distance.options[0];
    }

    function round(num, places) {
        var multiplier = Math.pow(10, places);
        return Math.round(num * multiplier) / multiplier;
    }

    function updateHash(url) {
      return url + window.location.hash;
    }

    function transformData(performances, distances, model) {
        var output = {},
            labels = []
        datasets = [],
            colors = [{
                fill: '#3B78E7',
            }, {
                fill: '#9C27B0',
            }, {
                fill: '#E91C63',
            }, {
                fill: '#DB4437',
            }, {
                fill: '#F4B400',
            },  {
                fill: '#0F9D58',
            }];
        for (var i = 0; i < distances.length; i++) {
            labels.push(distances[i].name);
        }
        for (var j = 0; j < performances.length; j++) {

            var performance = performances[j],
                label = performance.label || performance.distance.value + performance.distance.units.value + " - " + timeConverter.toString(performance.time.value, true),
                t1 = performance.time.value,
                dataset = {
                    borderColor: colors[j].fill,
                    label: label,
                    fill: false,
                    data: []
                };
            for (var k = 0; k < distances.length; k++) {
                var cell = {},
                    distance = distances[k],
                    d2 = distance.value,
                    d1 = new Fit.conversion.UnitConverter(performance.distance.value, performance.distance.units.value).to("m").val(),
                    model = new Fit.model.aerobic.Riegel(d1, t1),
                    t2 = model.time(d2),
                    formattedT2 = timeConverter.toString(t2, true);
                cell.x = d2;
                cell.y = t2;
                dataset.data.push(cell);
            }
            datasets.push(dataset);
        }
        output.labels = labels;
        output.datasets = datasets;
        return output;
    }

    Chart.defaults.global.tooltips.titleFontColor = 'rgba(0,0,0, 0.8)';
    Chart.defaults.global.tooltips.backgroundColor = 'rgba(255,255,255, 0.8)';
    Chart.defaults.global.tooltips.bodyFontColor = '#000000';
    var lineChart = null;

    function drawPerformanceChart(performances, events) {
        var data = transformData(performances, events),
            options = {
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [{
                        type: 'category',
                        position: 'bottom'
                    }]
                },
                tooltips: {
                    enabled: true,
                    callbacks: {
                        label: function(tooltipItems, data) {
                            var datasetIndex = tooltipItems.datasetIndex,
                                dataset = data.datasets[datasetIndex];
                            return dataset.label + ", " + timeConverter.toString(tooltipItems.yLabel, true);
                        },
                        labelColor: function(tooltipItems, chartInstance) {
                            var data = chartInstance.data,
                                datasets = data.datasets,
                                datasetIndex = tooltipItems.datasetIndex,
                                dataset = datasets[datasetIndex];
                            return {
                                borderColor: dataset.borderColor,
                                backgroundColor: Chart.defaults.global.tooltips.backgroundColor
                            };
                        },
                    }
                }
            },
            chartElement = document.getElementById('chart'),
            ctx = chartElement.getContext("2d");

        if (lineChart) {
            lineChart.destroy();
        }
        lineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: data.datasets,
            },
            options: options
        });

    }
    var blankPerformance = {
        distance: {
            value: '',
            units: units.distance.options[0]
        },
        time: {
            formatted: '',
            value: ''
        },
    },

    router = new VueRouter({});

    var app = new Vue({
        el: '#app',
        data: function() {
            var performances = [];
            return {
                title: null,
                performances: performances,
                units: units,
                newPerformance: blankPerformance,
                editingPerformance: blankPerformance,
                share: {
                    facebook: shareURL.facebook(),
                    twitter: shareURL.twitter()
                },
                rating: {
                  sent: false,
                  value: 1
                },
                recommendedURLs: [
                  '/FitnessJS/tools/calories',
                  '/FitnessJS/tools/composition',
                  '/FitnessJS/tools/rep-max'
                ]
            }
        },
        router: router,
        watch: {
            performances: {
                handler: function() {
                    this.drawChart();

                    // update next step tool links
                    this.recommendedURLs[0] = updateHash('/FitnessJS/tools/calories');
                    this.recommendedURLs[1] = updateHash('/FitnessJS/tools/composition');
                    this.recommendedURLs[2] = updateHash('/FitnessJS/tools/rep-max');
                },
                deep: true
            },
            '$route': function(to, from) {
                var queryIsValid = queryParameters.areValid(to.query),
                    title = to.query.title,
                    performances = [];
                if (queryIsValid) {
                    performances = queryParameters.parse(to.query);
                }

                this.title = title;
                this.performances = performances;

                this.share.facebook = shareURL.facebook(this);
                this.share.twitter = shareURL.twitter(this);

            }
        },
        methods: {
            savePerformance: function(performance) {
                this.editingPerformance = blankPerformance;
                performance.time.value = timeConverter.fromString(performance.time.formatted);
                this.updateURL();
            },
            editPerformance: function(performance) {
                this.editingPerformance = performance;
                editDialog.show();
            },
            addPerformance: function(event) {
                var self = this,
                    time = this.newPerformance.time.formatted = this.newPerformance.time.formatted.trim(),
                    performances = this.performances,
                    addedPerformance,
                    handler,
                    snackbarOptions;
                if (this.newPerformance.distance.value <= 0 || time.length <= 0) {
                    return;
                }
                this.newPerformance.time.value = timeConverter.fromString(time);
                this.newPerformance.label = this.newPerformance.distance.value + this.newPerformance.distance.units.value + " - " + this.newPerformance.time.formatted;
                this.newPerformance.edit = false;
                this.newPerformance.id = "performance-" + this.performances.length;
                addedPerformance = this.newPerformance;
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
                this.updateURL();

                handler = function(event) {
                    self.removePerformance(addedPerformance);
                },
                snackbarOptions = {
                    actionText: 'Undo'
                };
                this.showSnackbar(addedPerformance.label+' Added.', handler, snackbarOptions);

                if(typeof dataLayer !== 'undefined') {
                  dataLayer.push(
                    {
                      'event':'gaEvent',
                      'eventCategory': 'performance',
                      'eventAction': 'add',
                      'eventLabel': addedPerformance.distance.value + addedPerformance.distance.units.value + '-' + addedPerformance.time.value
                    });
                }

            },
            removePerformance: function(performance) {
                var self = this,
                performances = this.performances,
                performanceIndex = this.performances.indexOf(performance),
                handler,
                snackbarOptions;

                this.performances.splice(performanceIndex, 1);
                this.updateURL();

                handler = function(event) {
                    performance.edit = false;
                    self.performances.splice(performanceIndex, 0, performance);
                    componentHandler.upgradeDom();
                    self.updateURL();
                },
                snackbarOptions = {
                    actionText: 'Undo'
                };
                this.showSnackbar(performance.label+' Deleted.', handler, snackbarOptions);

                if(typeof dataLayer !== 'undefined') {
                  dataLayer.push(
                    {
                      'event':'gaEvent',
                      'eventCategory': 'performance',
                      'eventAction': 'remove',
                      'eventLabel': performance.distance.value + performance.distance.units.value + '-' + performance.time.value
                    });
                }
            },
            setTimeUnit: function(performance, unit) {
                var oldTimeUnits = performance.time.units,
                    currentTimeValue = performance.time.value;
                performance.time.units = unit;
                if (currentTimeValue && oldTimeUnits) {
                    performance.time.value = new Fit.conversion.UnitConverter(currentTimeValue, oldTimeUnits).to(unit.value).val();
                }
                this.updateURL();
            },
            setDistanceUnit: function(performance, unit, current) {
                var oldDistanceUnits = performance.distance.units.value,
                    currentDistanceValue = performance.distance.value;
                performance.distance.units = unit;
                if (current) {
                    this.units.distance.current = unit;
                }
                if (currentDistanceValue && oldDistanceUnits) {
                    performance.distance.value = new Fit.conversion.UnitConverter(currentDistanceValue, oldDistanceUnits).to(unit.value).val();
                }
                this.updateURL();
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
            },
            showSnackbar: function(message, handler, options) {
                var options = options || {},
                    actionText = options.actionText || 'Undo',
                    timeout = options.timeout || 3000,
                    snackbarData = {
                        message: message,
                        timeout: timeout,
                        actionHandler: handler,
                        actionText: actionText
                    };
                snackbar.show(snackbarData);

            },
            updateURL: function() {
                var title = this.title,
                    times = this.performances.map(function(v) {
                        return v.time.value;
                    }),
                    distances = this.performances.map(function(v) {
                        return v.distance.value;
                    }),
                    units = this.performances.map(function(v) {
                        return v.distance.units.value;
                    }),
                    labels = this.performances.map(function(v) {
                        return v.label;
                    });
                router.push({
                    query: {
                        title: title,
                        time: times,
                        distance: distances,
                        dunit: units,
                        label: labels
                    }
                });
            },
            sendFeedback: function() {
              // If GTM, send event
              if(typeof dataLayer !== 'undefined') {
                dataLayer.push({'event':'feedback', 'name': document.title, rating: this.rating.value });
              }
              this.rating.sent = true;
            }
        }
    });

    var queryParams = app.$route.query,
        queryIsValid = queryParameters.areValid(queryParams),
        title = queryParams.title;
        performances = [];
    if (queryIsValid) {
        performances = queryParameters.parse(queryParams);
    }
    for(var i =0; i<performances.length; i++) {
        performances[i].id = "performance-"+i;
    }
    app.title = title;
    app.performances = performances;

    editDialog = new mdc.dialog.MDCDialog(document.querySelector('#edit-performance-dialog'));
})();
