
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
                ages = obj.age,
                genders = obj.gender,
                masses = obj.mass,
                wUnits = obj.wunit,
                heights = obj.height,
                hUnits = obj.hunit,
                names = obj.name,
                length,
                persons = [];

            if (!Array.isArray(ages)) {
                ages = [ages];
            }

            if (!Array.isArray(genders)) {
                genders = [genders];
            }

            if (!Array.isArray(heights)) {
                heights = [heights];
            }

            if (!Array.isArray(hUnits)) {
                hUnits = [hUnits];
            }

            if (!Array.isArray(masses)) {
                masses = [masses];
            }

            if (!Array.isArray(wUnits)) {
                wUnits = [wUnits];
            }
            if (!Array.isArray(names)) {
                names = [names];
            }
            length = names.length;

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

            for (var i = 0; i < hUnits.length; i++) {
                var hUnit = hUnits[i];
                for (var j = 0; j < units.height.options.length; j++) {
                    var unit = units.height.options[j];

                    if (hUnit === unit.value) {
                        hUnits[i] = unit;
                        break;
                    }
                }
            }

            for (var k = 0; k < length; k++) {
                var age = Number(ages[k]),
                    gender = genders[k],
                    mass = {
                        value: Number(masses[k]),
                        units: wUnits[k]
                    },
                    height = {
                        value: Number(heights[k]),
                        units: hUnits[k]
                    },
                    name = names[k],
                    person = {
                        age: age,
                        gender: gender,
                        mass: mass,
                        height: height,
                        name: name
                    };
                persons.push(person);

            }

            return persons;
        },
        areValid: function(obj) {
            var ages = obj.age
                masses = obj.mass,
                wUnits = obj.wunit,
                heights = obj.height,
                hUnits = obj.hunit,
                names = obj.name,
                fieldsExist = ages && masses && wUnits && heights && hUnits && names,
                multiple = Array.isArray(ages) && Array.isArray(masses) && Array.isArray(wUnits) && Array.isArray(names) && Array.isArray(heights) && Array.isArray(hUnits),
                single = !Array.isArray(ages) && !Array.isArray(masses) && !Array.isArray(wUnits) && !Array.isArray(names) && !Array.isArray(heights) && !Array.isArray(hUnits),
            isValid = false;
            if (!fieldsExist || !multiple && !single) {
                return isValid;
            }
            if (fieldsExist && multiple) {
                isValid = ages.length === masses.length && masses.length === wUnits.length && wUnits.length === hUnits.length && hUnits.length && heights.length;
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
        height: {
            options: [{
                name: "Meters",
                value: "m"
            }, {
                name: "Feet",
                value: "feet"
            }, {
                name: "Yards",
                value: "yards"
            }],
            current: storage.preferences.get('height')
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

    if (!storage.preferences.get('distance')) {
        storage.preferences.set('distance', units.distance.options[0]);
        units.distance.current = units.distance.options[0];
    }

    if (!storage.preferences.get('height')) {
        storage.preferences.set('height', units.height.options[0]);
        units.height.current = units.height.options[0];
    }

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

    function transformData(persons) {
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
            }],
            functions = [ {
                name:"BMR",
                func: app.mSJ

            }, {
                name: "RMR",
                func: app.rmr
            }, {
                name: "TEE (Sedentary)",
                func: app.tee,
                additionalArg: 0
            },
            {
                name: "TEE (Low)",
                func: app.tee,
                additionalArg: 1
            },{
                name: "TEE (Active)",
                func: app.tee,
                additionalArg: 2
            },{
                name: "TEE (Very Active)",
                func: app.tee,
                additionalArg: 3
            }];
        for (var i = 0; i < persons.length; i++) {
            labels.push(persons[i].name);
        }

            for (var j = 0; j < functions.length; j++) {

                var func = functions[j],
                    label = func.name,
                    dataset = {
                        borderColor: colors[j].fill,
                        label: label,
                        backgroundColor: colors[j].fill,
                        data: []
                    };
                    for(var k=0; k<persons.length; k++) {
                        var value = func.func(persons[k],  func.additionalArg );
                        dataset.data.push(value);
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

    function drawPerformanceChart(persons) {
        var data = transformData(persons),
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
                            return dataset.label + ", " + tooltipItems.yLabel + " kcal/day";
                        },
                        labelColor: function(tooltipItems, chartInstance) {
                            var data = chartInstance.data,
                                datasets = data.datasets,
                                datasetIndex = tooltipItems.datasetIndex,
                                dataset = datasets[datasetIndex];
                            return {
                                borderColor: dataset.borderColor,
                                backgroundColor: dataset.backgroundColor
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


    Chart.defaults.global.tooltips.backgroundColor = 'rgba(255,255,255, 0.8)';
    Chart.defaults.global.tooltips.bodyFontColor = '#000000';

    var router = new VueRouter({});

    var app = new Vue({
        el: '#app',
        data: function() {
            var persons = [];
            return {
                persons: persons,
                units: units,
                newPerson: {
                    name: '',
                    gender: 'Male',
                    age: '',
                    mass: {
                        value: '',
                        units: units.mass.current
                    },
                    height: {
                      value: '',
                      units: units.height.current
                    },
                },
                editing: null,
                share: {
                    facebook: shareURL.facebook(),
                    twitter: shareURL.twitter()
                },
                rating: {
                  sent: false,
                  value: 1
                },
                recommendedURLs: [
                  '/FitnessJS/tools/cardio-performance',
                  '/FitnessJS/tools/composition',
                  '/FitnessJS/tools/rep-max'
                ]
            }
        },
        router: router,
        watch: {
            persons: {
                handler: function() {
                    this.drawChart();

                    // update next step tool links
                    this.recommendedURLs[0] = updateHash('/FitnessJS/tools/cardio-performance');
                    this.recommendedURLs[1] = updateHash('/FitnessJS/tools/composition');
                    this.recommendedURLs[2] = updateHash('/FitnessJS/tools/rep-max');
                },
                deep: true
            },
            '$route': function(to, from) {
                var queryIsValid = queryParameters.areValid(to.query),
                    title = to.query.title,
                    persons = [];
                if (queryIsValid) {
                    persons = queryParameters.parse(to.query);
                }
                this.title = title;
                this.persons = persons;


                this.share.facebook = shareURL.facebook(this);
                this.share.twitter = shareURL.twitter(this);
            }
        },
        methods: {
          addPerson: function(person, reset) {
            var self = this,
            reset = reset || false,
            handler,
            addedPerson,
            snackbarOptions;
            if(!person.name.length || !person.age || !person.mass.value || !person.height.value) {
              return;
            }
            addedPerson = person;
            this.persons.push(person);
            if(reset) {
              this.newPerson = {
                  name: '',
                  gender: 'Male',
                  age: '',
                  mass: {
                      value: '',
                      units: units.mass.current
                  },
                  height: {
                    value: '',
                    units: units.height.current
                  },
                };
            }
            this.updateURL();

            handler = function(event) {
                self.removePerformance(addedPerson);
            },
            snackbarOptions = {
                actionText: 'Undo'
            };
            this.showSnackbar(addedPerson.name+' Added.', handler, snackbarOptions);

            if(typeof dataLayer !== 'undefined') {
              dataLayer.push(
                {
                  'event':'gaEvent',
                  'eventCategory': 'person',
                  'eventAction': 'add',
                  'eventLabel': addedPerson.age + 'years-'
                    + addedPerson.weight.value + addedPerson.weight.units.value + '-'
                    + addedPerson.height.value + addedPerson.weight.units.value
                });
            }

          },
          removePerson: function(person) {
            var self = this,
            persons = this.persons,
            personIndex = this.persons.indexOf(person);
            this.persons.splice(personIndex, 1);
            this.updateURL();

            handler = function(event) {
                person.edit = false;
                self.persons.splice(personIndex, 0, person);
                componentHandler.upgradeDom();
                self.updateURL();
            },
            snackbarOptions = {
                actionText: 'Undo'
            };
            this.showSnackbar(person.name+' Deleted.', handler, snackbarOptions);

            if(typeof dataLayer !== 'undefined') {
              dataLayer.push(
                {
                  'event':'gaEvent',
                  'eventCategory': 'person',
                  'eventAction': 'remove',
                  'eventLabel': person.age + 'years-'
                    + person.weight.value + person.weight.units.value + '-'
                    + person.height.value + person.weight.units.value
                });
            }
          },
          editPerson: function(person) {
              this.editing = person;
              componentHandler.upgradeDom();
          },
          savePerson: function(person) {
              this.editing = null;
          },
          setUnit: function(person, type, unit, current) {
            var current = current || false,
                oldUnits = person[type].units,
                currentValue = person[type].value;
            person[type].units = unit;
            if (current) {
                this.units[type].current = unit;
            }
            if (currentValue && oldUnits) {
                person[type].value = new Fit.conversion.UnitConverter(currentValue, oldUnits).to(unit.value).val();
            }
            this.updateURL();
          },
          mSJ: function(person) {
            var height = new Fit.conversion.UnitConverter(person.height.value, person.height.units.value).to("m").val(),
                mass = new Fit.conversion.UnitConverter(person.mass.value, person.mass.units.value).to("kg").val(),
                gender,
                dob,
                model,
                value;
                // set Gender
            if(person.gender === "Male") {
              gender = Fit.Gender.Male
            } else {
              gender = Fit.Gender.Female;
            }

            // set DOB
            dob = new Date();
            dob.setFullYear(dob.getFullYear() - person.age);
            model = new Fit.energy.MSJ(gender);
            value = model.predict(dob,mass, height);
            return round(value, 2);
          },
          revisedHB: function(person) {
            var height = new Fit.conversion.UnitConverter(person.height.value, person.height.units.value).to("m").val(),
                mass = new Fit.conversion.UnitConverter(person.mass.value, person.mass.units.value).to("kg").val(),
                gender,
                dob,
                model,
                value;
                // set Gender
            if(person.gender === "Male") {
              gender = Fit.Gender.Male
            } else {
              gender = Fit.Gender.Female;
            }

            // set DOB
            dob = new Date();
            dob.setFullYear(dob.getFullYear() - person.age);

            model = new Fit.energy.RevisedHB(gender);

            value = model.predict(dob, mass, height);
            return round(value, 2);
          },
          rmr: function(person) {
            var height = new Fit.conversion.UnitConverter(person.height.value, person.height.units.value).to("m").val(),
                mass = new Fit.conversion.UnitConverter(person.mass.value, person.mass.units.value).to("kg").val(),
                gender,
                dob,
                model,
                value;
                // set Gender
            if(person.gender === "Male") {
              gender = Fit.Gender.Male
            } else {
              gender = Fit.Gender.Female;
            }

            // set DOB
            dob = new Date();
            dob.setFullYear(dob.getFullYear() - person.age);
            model = new Fit.energy.RMR(gender, dob, mass, height);
            value = model.quick();
            return round(value, 2);
          },
          tee: function(person, pal) {
            var height = new Fit.conversion.UnitConverter(person.height.value, person.height.units.value).to("m").val(),
                mass = new Fit.conversion.UnitConverter(person.mass.value, person.mass.units.value).to("kg").val(),
                gender,
                dob,
                model,
                value;
                // set Gender
            if(person.gender === "Male") {
              gender = Fit.Gender.Male
            } else {
              gender = Fit.Gender.Female;
            }

            // set DOB
            dob = new Date();
            dob.setFullYear(dob.getFullYear() - person.age);

            if(age < 18) {
                model = new Fit.energy.ChildTEE(gender, pal);
            } else{
                model = new Fit.energy.AdultTEE(gender, pal);
            }

            value = model.predict(dob, mass, height);

            return round(value, 2);
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
            drawChart: function() {
                drawPerformanceChart(this.persons);
            },
          updateURL: function() {
            var title = this.title,
                    ages = this.persons.map(function(v) {
                        return v.age;
                    }),
                    genders = this.persons.map(function(v) {
                       return v.gender;
                    });
                    masses = this.persons.map(function(v) {
                        return v.mass.value;
                    }),
                    wUnits = this.persons.map(function(v) {
                        return v.mass.units.value;
                    }),
                    heights = this.persons.map(function(v) {
                        return v.height.value;
                    });
                    hUnits = this.persons.map(function(v) {
                       return v.height.units.value;
                    });
                    names = this.persons.map(function(v) {
                       return v.name;
                    });

            router.push({
                query: {
                    title: title,
                    age: ages,
                    gender: genders,
                    mass: masses,
                    wunit: wUnits,
                    height: heights,
                    hunit: hUnits,
                    name: names
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
        persons= [];
    if (queryIsValid) {
        persons = queryParameters.parse(queryParams);
    }
    for(var i =0; i<persons.length; i++) {
        persons[i].id = "person-"+i;
    }
    app.title = title;
    app.persons = persons;
