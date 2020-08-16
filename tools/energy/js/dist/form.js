'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateInput = function (_React$Component) {
    _inherits(DateInput, _React$Component);

    function DateInput(props) {
        _classCallCheck(this, DateInput);

        var _this = _possibleConstructorReturn(this, (DateInput.__proto__ || Object.getPrototypeOf(DateInput)).call(this, props));

        _this.state = {
            'value': null,
            'year': props.year || new Date().getFullYear(),
            'month': props.month || 0,
            'day': props.day || 1
        };
        _this.years = _this.getYears();
        _this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        _this.days = [];
        _this.updateDays(_this.state.year, _this.state.month);
        _this.onYearChange = _this.onYearChange.bind(_this);
        _this.onMonthChange = _this.onMonthChange.bind(_this);
        _this.onDayChange = _this.onDayChange.bind(_this);

        _this.label = '';
        if (_this.props.label) {
            _this.label = React.createElement(
                'label',
                { className: 'label' },
                _this.props.label
            );
        }

        _this.helpText = '';
        if (_this.props.helpText) {
            _this.helpText = React.createElement(
                'p',
                { className: 'help' },
                _this.props.helpText
            );
        }
        return _this;
    }

    _createClass(DateInput, [{
        key: 'getYears',
        value: function getYears() {
            var now = new Date(),
                upperBoundYear = now.getFullYear(),
                lowerBoundYear = upperBoundYear - 100,
                years = [];

            for (var i = upperBoundYear; i > lowerBoundYear; i--) {
                years.push(i);
            }
            return years;
        }
    }, {
        key: 'updateDays',
        value: function updateDays(year, month) {
            var daysInMonth = this.daysInMonth(year, month),
                output = [];
            for (var i = 0; i < daysInMonth; i++) {
                output.push(i + 1);
            }
            this.days = output;
        }
    }, {
        key: 'daysInMonth',
        value: function daysInMonth(year, month) {
            return new Date(year, month, 0).getDate();
        }
    }, {
        key: 'onYearChange',
        value: function onYearChange(event) {
            var rawValue = event.target.value,
                value = parseInt(rawValue),
                dateValue = new Date(value, this.state.month, this.state.day);
            this.updateDays(this.state.year, value);
            this.setState({ 'year': value, 'value': dateValue });

            if (this.props.valueChange) {
                this.props.valueChange(dateValue, this.state);
            }
        }
    }, {
        key: 'onMonthChange',
        value: function onMonthChange(event) {
            var rawValue = event.target.value,
                value = parseInt(rawValue) + 1,
                dateValue = new Date(this.state.year, value, this.state.day);
            this.updateDays(this.state.year, value);
            this.setState({ 'month': value, 'value': dateValue });
            if (this.props.valueChange) {
                this.props.valueChange(dateValue, this.state);
            }
        }
    }, {
        key: 'onDayChange',
        value: function onDayChange(event) {
            var rawValue = event.target.value,
                value = parseInt(rawValue),
                dateValue = new Date(this.state.year, this.state.month, value);
            this.setState({ 'day': value, 'value': dateValue });
            if (this.props.valueChange) {
                this.props.valueChange(dateValue, this.state);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var years = this.years.map(function (value) {
                return React.createElement(
                    'option',
                    { key: value, value: value },
                    value
                );
            }),
                days = this.days.map(function (value, index) {
                return React.createElement(
                    'option',
                    { key: index, value: index },
                    value
                );
            }),
                months = this.months.map(function (value, index) {
                return React.createElement(
                    'option',
                    { key: index, value: index },
                    value
                );
            });

            return React.createElement(
                'div',
                { className: 'field' },
                this.label,
                React.createElement(
                    'div',
                    { className: 'control select multiple' },
                    React.createElement(
                        'select',
                        { name: 'year', onChange: this.onYearChange },
                        years
                    ),
                    React.createElement(
                        'select',
                        { name: 'month', onChange: this.onMonthChange },
                        months
                    ),
                    React.createElement(
                        'select',
                        { name: 'day', onChange: this.onDayChange },
                        days
                    )
                ),
                this.helpText
            );
        }
    }]);

    return DateInput;
}(React.Component);

var NumberInput = function (_React$Component2) {
    _inherits(NumberInput, _React$Component2);

    function NumberInput(props) {
        _classCallCheck(this, NumberInput);

        var _this2 = _possibleConstructorReturn(this, (NumberInput.__proto__ || Object.getPrototypeOf(NumberInput)).call(this, props));

        _this2.state = {
            'value': 0
        };
        _this2.type = _this2.props.type || 'text';
        _this2.maxLength = _this2.props.maxLength || '';
        _this2.label = '';
        _this2.helpText = '';
        if (_this2.props.helpText) {
            _this2.helpText = React.createElement(
                'p',
                { className: 'help' },
                _this2.props.helpText
            );
        }
        if (_this2.props.label) {
            _this2.label = React.createElement(
                'label',
                { className: 'label' },
                _this2.props.label
            );
        }
        _this2.onChangeHandler = _this2.onChangeHandler.bind(_this2);
        return _this2;
    }

    _createClass(NumberInput, [{
        key: 'isValidInput',
        value: function isValidInput(content) {
            var validCharacters = '0123456789.';
            for (var i = 0; i < content.length; i++) {
                var character = content[i],
                    isValidCharacter = validCharacters.indexOf(character) > -1;
                if (!isValidCharacter) {
                    return false;
                }
            }
            return true;
        }
    }, {
        key: 'onChangeHandler',
        value: function onChangeHandler(event) {
            var rawValue = event.target.value,
                value;

            if (!this.isValidInput(rawValue)) {
                return;
            }

            if (rawValue) {
                value = parseFloat(rawValue);
            } else {
                value = 0;
            }

            this.setState({ 'value': rawValue });
            if (this.props.valueChange) {
                this.props.valueChange(rawValue);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'field' },
                this.label,
                React.createElement(
                    'p',
                    { className: 'control' },
                    React.createElement('input', { value: this.state.value, className: 'input', maxLength: this.maxLength, type: this.props.type, onChange: this.onChangeHandler, placeholder: this.props.placeholder })
                ),
                this.helpText
            );
        }
    }]);

    return NumberInput;
}(React.Component);

var Dropdown = function (_React$Component3) {
    _inherits(Dropdown, _React$Component3);

    function Dropdown(props) {
        _classCallCheck(this, Dropdown);

        var _this3 = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

        _this3.state = {
            'value': 0
        };
        _this3.label = '';
        if (_this3.props.label) {
            _this3.label = React.createElement(
                'label',
                { className: 'label' },
                _this3.props.label
            );
        }
        _this3.helpText = '';
        if (_this3.props.helpText) {
            _this3.helpText = React.createElement(
                'p',
                { className: 'help' },
                _this3.props.helpText
            );
        }
        _this3.options = props.options.map(function (item, index) {
            return React.createElement(
                'option',
                { key: index, value: index },
                item.name
            );
        });
        _this3.onChangeHandler = _this3.onChangeHandler.bind(_this3);
        return _this3;
    }

    _createClass(Dropdown, [{
        key: 'onChangeHandler',
        value: function onChangeHandler(event) {
            var rawValue = event.target.value,
                option = this.props.options[rawValue];
            this.setState({ 'value': option });
            if (this.props.valueChange) {
                this.props.valueChange(option);
            }
        }
    }, {
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                { className: 'field' },
                this.label,
                React.createElement(
                    'div',
                    { className: 'control' },
                    React.createElement(
                        'div',
                        { className: 'select' },
                        React.createElement(
                            'select',
                            { onChange: this.onChangeHandler },
                            this.options
                        )
                    )
                ),
                this.helpText
            );
        }
    }]);

    return Dropdown;
}(React.Component);

var UnitValue = function (_React$Component4) {
    _inherits(UnitValue, _React$Component4);

    function UnitValue(props) {
        _classCallCheck(this, UnitValue);

        var _this4 = _possibleConstructorReturn(this, (UnitValue.__proto__ || Object.getPrototypeOf(UnitValue)).call(this, props));

        _this4.state = {
            'displayValue': '',
            'value': 0,
            'unit': props.units[0]
        };
        _this4.type = _this4.props.type || 'text';
        _this4.maxLength = _this4.props.maxLength || '';
        _this4.units = props.units.map(function (item, index) {
            return React.createElement(
                'option',
                { key: index, value: index },
                item.name
            );
        });
        _this4.onValueChange = _this4.onValueChange.bind(_this4);
        _this4.onUnitChange = _this4.onUnitChange.bind(_this4);
        return _this4;
    }

    _createClass(UnitValue, [{
        key: 'onValueChange',
        value: function onValueChange(event) {
            var rawValue = event.target.value,
                value,
                outputValue;
            if (rawValue) {
                value = parseFloat(rawValue);
            } else {
                value = 0;
            }
            outputValue = this.calculateValue(value, this.state.unit, this.props.returnUnit);
            this.setState({ 'displayValue': rawValue, 'value': value });
            if (this.props.valueChange) {
                this.props.valueChange(outputValue, value, this.state.unit);
            }
        }
    }, {
        key: 'onUnitChange',
        value: function onUnitChange(e) {
            var value = event.target.value,
                unit = this.props.units[value],
                outputValue = this.calculateValue(this.state.displayValue, unit, this.props.returnUnit);
            this.setState({ 'unit': unit });

            if (this.props.valueChange) {
                this.props.valueChange(outputValue, value, unit);
            }
        }
    }, {
        key: 'calculateValue',
        value: function calculateValue(value, from, to) {
            var converter = new Fit.conversion.UnitConverter(value, from.code).to(to.code),
                output = converter.val();
            return output;
        }
    }, {
        key: 'render',
        value: function render() {
            var label;
            if (this.props.label) {
                label = React.createElement(
                    'label',
                    { className: 'label' },
                    this.props.label
                );
            } else {
                label = '';
            }

            var helpText = '';
            if (this.props.helpText) {
                helpText = React.createElement(
                    'p',
                    { className: 'help' },
                    this.props.helpText
                );
            }

            return React.createElement(
                'div',
                { className: 'field unit-value' },
                label,
                React.createElement(
                    'div',
                    { className: 'control' },
                    React.createElement('input', { type: this.type, className: 'input', maxLength: this.maxLength, onChange: this.onValueChange, value: this.state.displayValue }),
                    React.createElement(
                        'div',
                        { className: 'select' },
                        React.createElement(
                            'select',
                            { onChange: this.onUnitChange },
                            this.units
                        )
                    )
                ),
                helpText
            );
        }
    }]);

    return UnitValue;
}(React.Component);

var Form = function (_React$Component5) {
    _inherits(Form, _React$Component5);

    function Form(props) {
        _classCallCheck(this, Form);

        return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));
    }

    _createClass(Form, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'form',
                { className: 'columns is-mobile' },
                React.createElement(
                    'div',
                    { className: 'column is-half' },
                    React.createElement(Dropdown, { label: 'Gender', options: this.props.genders, valueChange: this.props.genderChange, helpText: 'The gender of the person' }),
                    React.createElement(DateInput, { label: 'Date of Birth', helpText: 'Date of birth of the person', valueChange: this.props.dateOfBirthChange }),
                    React.createElement(Dropdown, { label: 'PAL', options: this.props.pals, valueChange: this.props.palChange, helpText: 'Physical Activity Level (PAL) of the person' })
                ),
                React.createElement(
                    'div',
                    { className: 'column is-half' },
                    React.createElement(UnitValue, { label: 'Weight', maxLength: '4', returnUnit: this.props.massUnit, valueChange: this.props.massChange, units: this.props.massUnits, helpText: 'The weight of the person' }),
                    React.createElement(UnitValue, { label: 'Height', maxLength: '4', returnUnit: this.props.distanceUnit, valueChange: this.props.heightChange, units: this.props.distanceUnits, helpText: 'The height of the person' })
                )
            );
        }
    }]);

    return Form;
}(React.Component);