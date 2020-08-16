'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberInput = function (_React$Component) {
    _inherits(NumberInput, _React$Component);

    function NumberInput(props) {
        _classCallCheck(this, NumberInput);

        var _this = _possibleConstructorReturn(this, (NumberInput.__proto__ || Object.getPrototypeOf(NumberInput)).call(this, props));

        _this.state = {
            'value': 0
        };
        _this.type = _this.props.type || 'text';
        _this.maxLength = _this.props.maxLength || '';
        _this.label = '';
        _this.helpText = '';
        if (_this.props.helpText) {
            _this.helpText = React.createElement(
                'p',
                { className: 'help' },
                _this.props.helpText
            );
        }
        if (_this.props.label) {
            _this.label = React.createElement(
                'label',
                { className: 'label' },
                _this.props.label
            );
        }
        _this.onChangeHandler = _this.onChangeHandler.bind(_this);
        return _this;
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

var Dropdown = function (_React$Component2) {
    _inherits(Dropdown, _React$Component2);

    function Dropdown(props) {
        _classCallCheck(this, Dropdown);

        var _this2 = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

        _this2.state = {
            'value': 0
        };
        _this2.label = '';
        if (_this2.props.label) {
            _this2.label = React.createElement(
                'label',
                { className: 'label' },
                _this2.props.label
            );
        }
        _this2.helpText = '';
        if (_this2.props.helpText) {
            _this2.helpText = React.createElement(
                'p',
                { className: 'help' },
                _this2.props.helpText
            );
        }
        _this2.options = props.options.map(function (item, index) {
            return React.createElement(
                'option',
                { key: index, value: index },
                item.name
            );
        });
        _this2.onChangeHandler = _this2.onChangeHandler.bind(_this2);
        return _this2;
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

var UnitValue = function (_React$Component3) {
    _inherits(UnitValue, _React$Component3);

    function UnitValue(props) {
        _classCallCheck(this, UnitValue);

        var _this3 = _possibleConstructorReturn(this, (UnitValue.__proto__ || Object.getPrototypeOf(UnitValue)).call(this, props));

        _this3.state = {
            'displayValue': '',
            'value': 0,
            'unit': props.units[0]
        };
        _this3.type = _this3.props.type || 'text';
        _this3.maxLength = _this3.props.maxLength || '';
        _this3.units = props.units.map(function (item, index) {
            return React.createElement(
                'option',
                { key: index, value: index },
                item.name
            );
        });
        _this3.onValueChange = _this3.onValueChange.bind(_this3);
        _this3.onUnitChange = _this3.onUnitChange.bind(_this3);
        return _this3;
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

var Form = function (_React$Component4) {
    _inherits(Form, _React$Component4);

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
                    { className: 'column is-half is-mobile' },
                    React.createElement(
                        'h2',
                        { className: 'subtitle' },
                        'Demographics'
                    ),
                    React.createElement(
                        'div',
                        { className: 'columns' },
                        React.createElement(
                            'div',
                            { className: 'column is-half' },
                            React.createElement(Dropdown, { label: 'Gender', options: this.props.genders, valueChange: this.props.genderChange, helpText: 'The gender of the athlete' })
                        ),
                        React.createElement(
                            'div',
                            { className: 'column is-half' },
                            React.createElement(NumberInput, { type: 'tel', label: 'Age', maxLength: '3', valueChange: this.props.ageChange, helpText: 'Age is provided in years' })
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'column is-half is-mobile' },
                    React.createElement(
                        'h2',
                        { className: 'subtitle' },
                        'Your Performance'
                    ),
                    React.createElement(
                        'div',
                        { className: 'columns' },
                        React.createElement(
                            'div',
                            { className: 'column is-half' },
                            React.createElement(NumberInput, { type: 'tel', label: 'Repetitions', maxLength: '4', helpText: 'The number of full repetitions', valueChange: this.props.repChange })
                        ),
                        React.createElement(
                            'div',
                            { className: 'column is-half' },
                            React.createElement(UnitValue, { label: 'Weight', maxLength: '4', returnUnit: this.props.massUnit, valueChange: this.props.massChange, units: this.props.massUnits, helpText: 'The weight lifted for each repetition' })
                        )
                    )
                )
            );
        }
    }]);

    return Form;
}(React.Component);