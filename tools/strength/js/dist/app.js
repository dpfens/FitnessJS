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
            'age': 0,
            'reps': {
                'value': 0
            },
            'mass': {
                'value': '',
                'unit': null,
                'originalUnit': null
            }
        };
        _this.onGenderChange = _this.onGenderChange.bind(_this);
        _this.onAgeChange = _this.onAgeChange.bind(_this);
        _this.onRepChange = _this.onRepChange.bind(_this);
        _this.onMassChange = _this.onMassChange.bind(_this);
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
        key: 'onAgeChange',
        value: function onAgeChange(value) {
            this.setState({ 'age': value });
        }
    }, {
        key: 'onRepChange',
        value: function onRepChange(value) {
            if (value.length) {
                value = parseInt(value);
            }
            this.setState({ 'repetitions': value });
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
        key: 'render',
        value: function render() {
            var processors = [Fit.strength.Abadie, Fit.strength.Baechle, Fit.strength.Brzycki, Fit.strength.Epley, Fit.strength.Landers, Fit.strength.Lombardi, Fit.strength.Mayhew, Fit.strength.McGlothin, Fit.strength.OConnor, Fit.strength.Wathan],
                display = React.createElement(
                'h2',
                { className: 'title text-center' },
                'Not enough information to predict 1-RM :-('
            );

            if (this.state.repetitions && this.state.mass.value && this.state.mass.originalUnit) {
                display = React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'h2',
                        { className: 'subtitle' },
                        '1-RM estimations'
                    ),
                    React.createElement(RMDisplay, { processors: processors, gender: this.state.gender, age: this.state.age, repetitions: this.state.repetitions, mass: this.state.mass })
                );
            }
            return React.createElement(
                'div',
                null,
                React.createElement(Form, { massUnits: this.props.massUnits, massUnit: this.props.massUnit, genders: this.props.genders, genderChange: this.onGenderChange, ageChange: this.onAgeChange, repChange: this.onRepChange, massChange: this.onMassChange }),
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
    genders = [{
    'name': 'Male',
    'code': Fit.Gender.Male
}, {
    'name': 'Female',
    'code': Fit.Gender.Female
}];

var domContainer = document.querySelector('#app');
ReactDOM.render(React.createElement(App, { massUnits: massUnits, massUnit: massUnits[0], genders: genders }), domContainer);