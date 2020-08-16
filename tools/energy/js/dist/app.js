var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            'gender': _this.props.genders[0],
            'dateOfBirth': {
                'value': new Date()
            },
            'mass': {
                'value': 0,
                'unit': null,
                'originalUnit': null
            },
            'height': {
                'value': 0,
                'unit': null,
                'originalUnit': null
            },
            pal: _this.props.pals[0]
        };
        _this.onGenderChange = _this.onGenderChange.bind(_this);
        _this.onDateOfBirthChange = _this.onDateOfBirthChange.bind(_this);
        _this.onMassChange = _this.onMassChange.bind(_this);
        _this.onHeightChange = _this.onHeightChange.bind(_this);
        _this.onPALChange = _this.onPALChange.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {}
    }, {
        key: 'onGenderChange',
        value: function onGenderChange(value) {
            this.setState({ 'gender': value });
        }
    }, {
        key: 'onDateOfBirthChange',
        value: function onDateOfBirthChange(value, data) {
            this.setState({ 'dateOfBirth': data });
        }
    }, {
        key: 'onMassChange',
        value: function onMassChange(value, originalValue, originalUnit) {
            if (value.length) {
                value = parseFloat(value);
            }
            var mass = {
                'value': value,
                'originalValue': originalValue,
                'originalUnit': originalUnit
            };
            this.setState({ 'mass': mass });
        }
    }, {
        key: 'onHeightChange',
        value: function onHeightChange(value, originalValue, originalUnit) {
            if (value.length) {
                value = parseFloat(value);
            }
            var height = {
                'value': value,
                'originalValue': originalValue,
                'originalUnit': originalUnit
            };
            this.setState({ 'height': height });
        }
    }, {
        key: 'onPALChange',
        value: function onPALChange(value) {
            this.setState({ 'pal': value });
        }
    }, {
        key: 'render',
        value: function render() {
            var gender = this.state.gender,
                dob = this.state.dateOfBirth,
                mass = this.state.mass.value,
                height = this.state.height.value,
                pal = this.state.pal,
                display = '';
            if (gender && dob && mass && height && pal) {
                var bmrProcessors = [Fit.energy.HB, Fit.energy.RevisedHB, Fit.energy.MSJ],
                    rmrProcessor = new Fit.energy.RMR(gender, dob.value, mass, height),
                    teeEstimators = [Fit.energy.ChildTEE, Fit.energy.AdultTEE],
                    bmrRows = [],
                    teeRows = [];

                for (var i = 0; i < bmrProcessors.length; i++) {
                    var bmrProcessor = new bmrProcessors[i](gender.code),
                        value = bmrProcessor.predict(dob.value, mass, height),
                        name = bmrProcessors[i].name,
                        row = React.createElement(
                        'tr',
                        { key: name },
                        React.createElement(
                            'td',
                            null,
                            name
                        ),
                        React.createElement(
                            'td',
                            null,
                            value
                        )
                    );
                    bmrRows.push(row);
                }

                var restingMetabolicRateKcals = rmrProcessor.quick();

                for (var i = 0; i < teeEstimators.length; i++) {
                    var estimator = new teeEstimators[i](gender.code, pal.code),
                        value = estimator.predict(dob.value, mass, height),
                        name = teeEstimators[i].name,
                        row = React.createElement(
                        'tr',
                        { key: name },
                        React.createElement(
                            'td',
                            null,
                            name
                        ),
                        React.createElement(
                            'td',
                            null,
                            value
                        )
                    );
                    teeRows.push(row);
                }

                var display = React.createElement(
                    'div',
                    { className: 'columns' },
                    React.createElement(
                        'div',
                        { className: 'column' },
                        React.createElement(
                            'h2',
                            { className: 'subtitle' },
                            'Basal Metabolic Rate'
                        ),
                        React.createElement(
                            'table',
                            { className: 'table' },
                            React.createElement(
                                'thead',
                                null,
                                React.createElement(
                                    'tr',
                                    null,
                                    React.createElement(
                                        'th',
                                        null,
                                        'Name'
                                    ),
                                    React.createElement(
                                        'th',
                                        null,
                                        'Value (Kilocalories)'
                                    )
                                )
                            ),
                            React.createElement(
                                'tbody',
                                null,
                                bmrRows
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'column' },
                        React.createElement(
                            'h2',
                            { className: 'subtitle' },
                            'Total Energy Expenditure'
                        ),
                        React.createElement(
                            'table',
                            { className: 'table' },
                            React.createElement(
                                'thead',
                                null,
                                React.createElement(
                                    'tr',
                                    null,
                                    React.createElement(
                                        'th',
                                        null,
                                        'Name'
                                    ),
                                    React.createElement(
                                        'th',
                                        null,
                                        'Value (Kilocalories)'
                                    )
                                )
                            ),
                            React.createElement(
                                'tbody',
                                null,
                                teeRows
                            )
                        )
                    )
                );
            }

            return React.createElement(
                'div',
                null,
                React.createElement(Form, { pals: this.props.pals, massUnits: this.props.massUnits, massUnit: this.props.massUnit, distanceUnits: this.props.distanceUnits, distanceUnit: this.props.distanceUnit, genders: this.props.genders, genderChange: this.onGenderChange, dateOfBirthChange: this.onDateOfBirthChange, massChange: this.onMassChange, heightChange: this.onHeightChange, palChange: this.onPALChange }),
                display
            );
        }
    }]);

    return App;
}(React.Component);

var massUnits = [{
    'name': 'Kilograms',
    'code': 'kg'
}, {
    'name': 'Lb',
    'code': 'lb'
}],
    distanceUnits = [{
    'name': 'Meters',
    'code': 'm'
}, {
    'name': 'Feet',
    'code': 'feet'
}, {
    'name': 'Inches',
    'code': 'inches'
}],
    genders = [{
    'name': 'Male',
    'code': Fit.Gender.Male
}, {
    'name': 'Female',
    'code': Fit.Gender.Female
}],
    pals = [{
    'name': 'Sedendary',
    'code': Fit.PAL.Sedentary
}, {
    'name': 'Low',
    'code': Fit.PAL.Low
}, {
    'name': 'Active',
    'code': Fit.PAL.Active
}, {
    'name': 'Very Active',
    'code': Fit.PAL.VeryActive
}];

var domContainer = document.querySelector('#app');
ReactDOM.render(React.createElement(App, { pals: pals, massUnits: massUnits, massUnit: massUnits[0], distanceUnits: distanceUnits, distanceUnit: distanceUnits[0], genders: genders }), domContainer);