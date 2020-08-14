'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DurationInput = function (_React$Component) {
    _inherits(DurationInput, _React$Component);

    function DurationInput(props) {
        _classCallCheck(this, DurationInput);

        var _this = _possibleConstructorReturn(this, (DurationInput.__proto__ || Object.getPrototypeOf(DurationInput)).call(this, props));

        _this.state = {
            'value': _this.props.value || 0,
            'hours': _this.props.hours || 0,
            'minutes': _this.props.minutes || 0,
            'seconds': _this.props.seconds || 0
        };
        _this.onHourChangeHandler = _this.onHourChangeHandler.bind(_this);
        _this.onMinuteChangeHandler = _this.onMinuteChangeHandler.bind(_this);
        _this.onSecondChangeHandler = _this.onSecondChangeHandler.bind(_this);
        return _this;
    }

    _createClass(DurationInput, [{
        key: 'onHourChangeHandler',
        value: function onHourChangeHandler(event) {
            var rawValue = event.target.value,
                value;
            if (rawValue) {
                value = parseFloat(rawValue);
            } else {
                value = 0;
            }
            var totalDuration = this.calculateDuration(value, this.state.minutes, this.state.seconds);
            this.setState({ 'hours': rawValue, 'value': totalDuration });
            if (this.props.valueChange) {
                var hours = rawValue,
                    minutes = this.state.minutes,
                    seconds = this.state.seconds;
                this.props.valueChange(totalDuration, hours, minutes, seconds);
            }
        }
    }, {
        key: 'onMinuteChangeHandler',
        value: function onMinuteChangeHandler(event) {
            var rawValue = event.target.value,
                value;
            if (rawValue) {
                value = parseFloat(rawValue);
            } else {
                value = 0;
            }
            var totalDuration = this.calculateDuration(this.state.hours, value, this.state.seconds);
            this.setState({ 'minutes': rawValue, 'value': totalDuration });
            if (this.props.valueChange) {
                var hours = this.state.hours,
                    minutes = rawValue,
                    seconds = this.state.seconds;
                this.props.valueChange(totalDuration, hours, minutes, seconds);
            }
        }
    }, {
        key: 'onSecondChangeHandler',
        value: function onSecondChangeHandler(event) {
            var rawValue = event.target.value,
                value;
            if (rawValue) {
                value = parseFloat(rawValue);
            } else {
                value = 0;
            }
            var totalDuration = this.calculateDuration(this.state.hours, this.state.minutes, value);
            this.setState({ 'seconds': rawValue, 'value': totalDuration });
            if (this.props.valueChange) {
                var hours = this.state.hours,
                    minutes = this.state.minutes,
                    seconds = rawValue;
                this.props.valueChange(totalDuration, hours, minutes, seconds);
            }
        }
    }, {
        key: 'calculateDuration',
        value: function calculateDuration(hours, minutes, seconds) {
            var output = hours * 3600 + minutes * 60 + seconds;
            return output;
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'field is-horizontal duration-input' },
                React.createElement(
                    'div',
                    { className: 'field-label is-normal' },
                    React.createElement(
                        'label',
                        { className: 'label' },
                        'Time'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'field-body' },
                    React.createElement(
                        'div',
                        { className: 'field' },
                        React.createElement(
                            'p',
                            { className: 'control' },
                            React.createElement('input', { type: 'tel', className: 'input', name: 'hours', maxLength: '2', onChange: this.onHourChangeHandler, value: this.state.hours }),
                            ':',
                            React.createElement('input', { type: 'tel', className: 'input', name: 'minutes', maxLength: '2', onChange: this.onMinuteChangeHandler, value: this.state.minutes }),
                            ':',
                            React.createElement('input', { type: 'tel', className: 'input', name: 'seconds', maxLength: '10', onChange: this.onSecondChangeHandler, value: this.state.seconds })
                        )
                    )
                )
            );
        }
    }]);

    return DurationInput;
}(React.Component);

var Input = function (_React$Component2) {
    _inherits(Input, _React$Component2);

    function Input(props) {
        _classCallCheck(this, Input);

        var _this2 = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

        _this2.state = {
            'value': props.value || ''
        };
        _this2.type = _this2.props.type || 'text';
        _this2.maxLength = _this2.props.maxLength || '';

        _this2.helpText = '';
        if (_this2.props.helpText) {
            _this2.helpText = React.createElement(
                'p',
                { className: 'help' },
                _this2.props.helpText
            );
        }

        _this2.label = '';
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

    _createClass(Input, [{
        key: 'onChangeHandler',
        value: function onChangeHandler(event) {
            var rawValue = event.target.value;
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
                    React.createElement('input', { className: 'input', maxLength: this.maxLength, value: this.state.value, type: this.props.type, onChange: this.onChangeHandler, placeholder: this.props.placeholder })
                ),
                this.helpText
            );
        }
    }]);

    return Input;
}(React.Component);

var Dropdown = function (_React$Component3) {
    _inherits(Dropdown, _React$Component3);

    function Dropdown(props) {
        _classCallCheck(this, Dropdown);

        var _this3 = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

        _this3.state = {
            'value': props.value || props.options[0]
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
            'displayValue': props.displayValue,
            'value': props.value,
            'unit': props.unit || props.units[0]
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
            var value = event.target.value,
                outputValue = this.calculateValue(value, this.state.unit, this.props.returnUnit);
            this.setState({ 'value': outputValue, 'displayValue': value });
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
                { className: 'field is-horizontal unit-value' },
                React.createElement(
                    'div',
                    { className: 'field-label is-normal' },
                    label
                ),
                React.createElement(
                    'div',
                    { className: 'field-body' },
                    React.createElement(
                        'div',
                        { className: 'field' },
                        React.createElement(
                            'div',
                            { className: 'control' },
                            React.createElement('input', { type: 'text', className: 'input', maxLength: this.props.maxLength, onChange: this.onValueChange, value: this.state.displayValue }),
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
                    )
                )
            );
        }
    }]);

    return UnitValue;
}(React.Component);

var BasicForm = function (_React$Component5) {
    _inherits(BasicForm, _React$Component5);

    function BasicForm(props) {
        _classCallCheck(this, BasicForm);

        var _this5 = _possibleConstructorReturn(this, (BasicForm.__proto__ || Object.getPrototypeOf(BasicForm)).call(this, props));

        _this5.state = {};
        return _this5;
    }

    _createClass(BasicForm, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {}
    }, {
        key: 'render',
        value: function render() {
            var _React$createElement;

            return React.createElement(
                'form',
                { className: 'columns' },
                React.createElement(
                    'div',
                    { className: 'column is-half' },
                    React.createElement(
                        'h2',
                        { className: 'subtitle' },
                        'Your Performance'
                    ),
                    React.createElement(DurationInput, (_React$createElement = { value: this.props.t1.originalValue }, _defineProperty(_React$createElement, 'value', this.props.t1.value), _defineProperty(_React$createElement, 'hours', this.props.t1.hours), _defineProperty(_React$createElement, 'minutes', this.props.t1.minutes), _defineProperty(_React$createElement, 'seconds', this.props.t1.seconds), _defineProperty(_React$createElement, 'valueChange', this.props.T1Change), _React$createElement)),
                    React.createElement(UnitValue, { label: 'Distance', maxLength: '6', returnUnit: this.props.distanceUnit, value: this.props.d1.value, displayValue: this.props.d1.originalValue, unit: this.props.d1.originalUnit, valueChange: this.props.D1Change, units: this.props.distanceUnits })
                ),
                React.createElement(
                    'div',
                    { className: 'column is-half' },
                    React.createElement(
                        'h2',
                        { className: 'subtitle' },
                        'Predicted Performance'
                    ),
                    React.createElement(UnitValue, { label: 'Distance', maxLength: '6', returnUnit: this.props.distanceUnit, value: this.props.d2.value, displayValue: this.props.d2.originalValue, unit: this.props.d2.originalUnit, valueChange: this.props.D2Change, units: this.props.distanceUnits })
                )
            );
        }
    }]);

    return BasicForm;
}(React.Component);

var AdvancedForm = function (_React$Component6) {
    _inherits(AdvancedForm, _React$Component6);

    function AdvancedForm(props) {
        _classCallCheck(this, AdvancedForm);

        return _possibleConstructorReturn(this, (AdvancedForm.__proto__ || Object.getPrototypeOf(AdvancedForm)).call(this, props));
    }

    _createClass(AdvancedForm, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {}
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'form',
                { className: 'columns' },
                React.createElement(
                    'div',
                    { className: 'column is-half' },
                    React.createElement(
                        'h2',
                        { className: 'subtitle' },
                        'Demographics'
                    ),
                    React.createElement(Dropdown, { label: 'Gender', options: this.props.genders, valueChange: this.props.genderChange }),
                    React.createElement(Input, { label: 'Age', type: 'tel', maxLength: '3', helpText: 'Age in years', valueChange: this.props.ageChange }),
                    React.createElement(
                        'h2',
                        { className: 'subtitle' },
                        'Your Performance'
                    ),
                    React.createElement(DurationInput, { value: this.props.t1.value, hours: this.props.t1.hours, minutes: this.props.t1.minutes, seconds: this.props.t1.seconds, valueChange: this.props.T1Change }),
                    React.createElement(UnitValue, { label: 'Distance', maxLength: '6', returnUnit: this.props.distanceUnit, displayValue: this.props.d1.originalValue, unit: this.props.d1.originalUnit, valueChange: this.props.D1Change, units: this.props.distanceUnits }),
                    React.createElement(Dropdown, { label: 'Mode', options: this.props.modes, valueChange: this.props.modeChange })
                ),
                React.createElement(
                    'div',
                    { className: 'column is-half' },
                    React.createElement(
                        'h2',
                        { className: 'subtitle' },
                        'Predicted Performance'
                    ),
                    React.createElement(UnitValue, { label: 'Distance', maxLength: '6', returnUnit: this.props.distanceUnit, displayValue: this.props.d2.originalValue, unit: this.props.d2.originalUnit, valueChange: this.props.D2Change, units: this.props.distanceUnits })
                )
            );
        }
    }]);

    return AdvancedForm;
}(React.Component);