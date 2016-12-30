(function() {

    var shareURL = {
        facebook: function(parameters, shareURL) {
            var parameters = parameters || {},
            parameters = this.parameters(parameters),
            baseURL = 'https://www.facebook.com/sharer/sharer.php',
            shareURL = shareURL || window.location.href,
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
        twitter: function(parameters, shareURL) {
            var parameters = parameters || {},
            parameters = this.parameters(parameters),
            baseURL = 'https://twitter.com/intent/tweet',
            shareURL = shareURL || window.location.href,
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
            reps = obj.reps,
                masses = obj.mass,
                wUnits = obj.wunit,
                labels = obj.label,
                length,
                performances = [];

            if (!Array.isArray(reps)) {
                reps = [reps]
            }
            if (!Array.isArray(masses)) {
                masses = [masses]
            }
            if (!Array.isArray(wUnits)) {
                wUnits = [wUnits]
            }
            if (!Array.isArray(labels)) {
                labels = [labels]
            }
            length = reps.length;

            for (var i = 0; i < wUnits.length; i++) {
                var wUnit = wUnits[i];
                for (var j = 0; j < units.mass.options.length; j++) {
                    var unit = units.mass.options[j];

                    if (wUnit === unit.value) {
                        wUnits[i] = unit;
                        break;
                    }
                }
            }

            for (var k = 0; k < length; k++) {
                var rep = Number(reps[k]),
                    mass = {
                        value: Number(masses[k]),
                        units: wUnits[k]
                    },
                    label = labels[k],
                    performance = {
                        reps: rep,
                        mass: mass,
                        label: label
                    };
                performances.push(performance);

            }

            return performances;
        },
        areValid: function(obj) {
            var reps = obj.reps,
                masses = obj.mass,
                wUnits = obj.wunit,
                labels = obj.label,
                fieldsExist = reps && masses && wUnits && labels,
                multiple = Array.isArray(reps) && Array.isArray(masses) && Array.isArray(wUnits) && Array.isArray(labels),
                single = !Array.isArray(reps) && !Array.isArray(masses) && !Array.isArray(wUnits) && !Array.isArray(labels)
            isValid = false;
            if (!fieldsExist || !multiple && !single) {
                return isValid;
            }
            if (fieldsExist && multiple) {
                isValid = reps.length === masses.length && masses.length === wUnits.length;
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
        mass: {
            options: [{
                name:"Kilograms",
                value: "kg"
            },
            {
                name:"Pounds",
                value: "lb"
            },
            {
                name:"Stones",
                value: "st"
            }],
            current: storage.preferences.get('mass')
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

    if (!storage.preferences.get('mass')) {
        storage.preferences.set('mass', units.mass.options[0]);
        units.mass.current = units.mass.options[0];
    }

    function round(num, places) {
        var multiplier = Math.pow(10, places);
        return Math.round(num * multiplier) / multiplier;
    }

    function updateHash(url) {
      return url + window.location.hash;
    }

    function transformData(performances, rms, model) {
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
        for (var i = 0; i < rms.length; i++) {
            labels.push(rms[i].name);
        }
        for (var j = 0; j < performances.length; j++) {

            var performance = performances[j],
                reps = performance.reps,
                mass = performance.mass.value,
                label = performance.label || performance.reps + " x " + mass + performance.mass.units.value,
                dataset = {
                    borderColor: colors[j].fill,
                    label: label,
                    backgroundColor: colors[j].fill,
                    data: []
                },
                massKg = new Fit.conversion.UnitConverter(performance.mass.value, performance.mass.units.value).to("kg").val(),
                model = new Fit.strength.Brzycki(reps),
                rm1 = model.predict(massKg);
            for (var k = 0; k < rms.length; k++) {
                var rm = rms[k],
                    kRm, kModel;
                    if(rm.value===1) {
                      kRm = rm1;
                    } else {
                      kModel = new Fit.strength.Landers(rm.value),
                      kRm = kModel.weight(rm1);
                    }
                dataset.data.push(round(kRm, 1));
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
                            return dataset.label + ", " + tooltipItems.yLabel + "kg";
                        },
                        labelColor: function(tooltipItems, chartInstance) {
                            var data = chartInstance.data,
                                datasets = data.datasets,
                                datasetIndex = tooltipItems.datasetIndex,
                                dataset = datasets[datasetIndex];
                            return {
                                borderColor: dataset.borderColor,
                                backgroundColor: dataset.backgroundColor,

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
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: data.datasets,
            },
            options: options
        });

    }

    var router = new VueRouter({});

    var app = new Vue({
        el: '#app',
        data: function() {
            var performances = [];
            return {
                title: null,
                performances: performances,
                units: units,
                newPerformance: {
                    mass: {
                        value: '',
                        units: units.mass.options[0]
                    },
                    reps: '',
                },
                editingPerformance: null,
                share: {
                    facebook: shareURL.facebook(),
                    twitter: shareURL.twitter()
                },
                recommendedURLs: [
                  '/FitnessJS/tools/calories',
                  '/FitnessJS/tools/composition',
                  '/FitnessJS/tools/cardio-performance'
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
                    this.recommendedURLs[2] = updateHash('/FitnessJS/tools/cardio-performance');
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
                this.editingPerformance = null;
                this.updateURL();
            },
            editPerformance: function(performance) {
                this.editingPerformance = performance;
                componentHandler.upgradeDom();
            },
            addPerformance: function(event) {
                var self = this,
                    reps = this.newPerformance.reps = this.newPerformance.reps.trim(),
                    performances = this.performances,
                    addedPerformance,
                    handler,
                    snackbarOptions;
                    console.log(reps);
                if (this.newPerformance.mass.value <= 0  || reps <= 0) {
                    return;
                }
                this.newPerformance.label =  reps +  " x " + this.newPerformance.mass.value + this.newPerformance.mass.units.value;
                this.newPerformance.edit = false;
                this.newPerformance.id = "performance-" + this.performances.length;
                addedPerformance = this.newPerformance;
                this.performances.push(this.newPerformance);
                this.newPerformance = {
                    mass: {
                        value: '',
                        units: this.units.mass.current
                    },
                    reps: ''
                };
                this.updateURL();

                handler = function(event) {
                    self.removePerformance(addedPerformance);
                },
                snackbarOptions = {
                    actionText: 'Undo'
                };
                this.showSnackbar(addedPerformance.label+' Added.', handler, snackbarOptions);

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
            },
            setMassUnit: function(performance, unit, current) {
                var oldmassUnits = performance.mass.units.value,
                    currentmassValue = performance.mass.value;
                performance.mass.units = unit;
                if (current) {
                    this.units.mass.current = unit;
                }
                if (currentmassValue && oldmassUnits) {
                    performance.mass.value = new Fit.conversion.UnitConverter(currentmassValue, oldmassUnits).to(unit.value).val();
                }
                this.updateURL();
            },
            drawChart: function() {
                var masses = [{
                    name: '1-RM',
                    value: 1
                }, {
                    name: '2-RM',
                    value: 2
                }, {
                    name: '3-RM',
                    value: 3
                }, {
                    name: '4-RM',
                    value: 4
                }, {
                    name: '5-RM',
                    value: 5
                }, {
                    name: '6-RM',
                    value: 6
                }, {
                    name: '7-RM',
                    value: 7
                }, {
                    name: '8-RM',
                    value: 8
                }, {
                    name: '9-RM',
                    value: 9
                }, {
                    name: '10-RM',
                    value: 10
                }]
                drawPerformanceChart(this.performances, masses)
            },
            showSnackbar: function(message, handler, options) {
                var options =  options || {},
                    actionText = options.actionText || 'Undo',
                    timeout = options.timeout || 3000,
                    snackbarContainer = document.querySelector('#app-snackbar'),
                    snackbarData = {
                        message: message,
                        timeout: timeout,
                        actionHandler: handler,
                        actionText: actionText
                };
                snackbarContainer.MaterialSnackbar.showSnackbar(snackbarData);

            },
            updateURL: function() {
                var title = this.title,
                    reps = this.performances.map(function(v) {
                        return v.reps;
                    }),
                    masses = this.performances.map(function(v) {
                        return v.mass.value;
                    }),
                    units = this.performances.map(function(v) {
                        return v.mass.units.value;
                    }),
                    labels = this.performances.map(function(v) {
                        return v.label;
                    });
                router.push({
                    query: {
                        title: title,
                        reps: reps,
                        mass: masses,
                        wunit: units,
                        label: labels
                    }
                });
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

})();
