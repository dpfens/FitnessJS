'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DurationInput = function (_React$Component) {
    _inherits(DurationInput, _React$Component);

    function DurationInput(props) {
        _classCallCheck(this, DurationInput);

        var _this = _possibleConstructorReturn(this, (DurationInput.__proto__ || Object.getPrototypeOf(DurationInput)).call(this, props));

        _this.state = {
            'value': 0,
            'displayValue': 0,
            'hours': 0,
            'minutes': 0,
            'seconds': 0
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
                this.props.valueChange(totalDuration);
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
                this.props.valueChange(totalDuration);
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
                this.props.valueChange(totalDuration);
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

var UnitValue = function (_React$Component2) {
    _inherits(UnitValue, _React$Component2);

    function UnitValue(props) {
        _classCallCheck(this, UnitValue);

        var _this2 = _possibleConstructorReturn(this, (UnitValue.__proto__ || Object.getPrototypeOf(UnitValue)).call(this, props));

        _this2.state = {
            'displayValue': 0,
            'value': 0,
            'unit': props.units[0]
        };
        _this2.units = props.units.map(function (item, index) {
            return React.createElement(
                'option',
                { key: index, value: index },
                item.name
            );
        });
        _this2.onValueChange = _this2.onValueChange.bind(_this2);
        _this2.onUnitChange = _this2.onUnitChange.bind(_this2);
        return _this2;
    }

    _createClass(UnitValue, [{
        key: 'onValueChange',
        value: function onValueChange(event) {
            var value = event.target.value,
                outputValue = this.calculateValue(value, this.state.unit, this.props.returnUnit);
            this.setState({ 'displayValue': value });
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
                        )
                    )
                )
            );
        }
    }]);

    return UnitValue;
}(React.Component);

var Form = function (_React$Component3) {
    _inherits(Form, _React$Component3);

    function Form(props) {
        _classCallCheck(this, Form);

        var _this3 = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

        _this3.state = {};
        return _this3;
    }

    _createClass(Form, [{
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
                        'Your Performance'
                    ),
                    React.createElement(DurationInput, { valueChange: this.props.T1Change }),
                    React.createElement(UnitValue, { label: 'Distance', maxLength: '6', returnUnit: this.props.distanceUnit, valueChange: this.props.D1Change, units: this.props.distanceUnits })
                ),
                React.createElement(
                    'div',
                    { className: 'column is-half' },
                    React.createElement(
                        'h2',
                        { className: 'subtitle' },
                        'Predicted Performance'
                    ),
                    React.createElement(UnitValue, { label: 'Distance', maxLength: '6', returnUnit: this.props.distanceUnit, valueChange: this.props.D2Change, units: this.props.distanceUnits })
                )
            );
        }
    }]);

    return Form;
}(React.Component);