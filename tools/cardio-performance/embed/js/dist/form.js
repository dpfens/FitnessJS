'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form(props) {
        _classCallCheck(this, Form);

        var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

        _this.state = {
            'time': {
                'value': props.timeValue,
                'rawValue': props.rawValue
            },
            'distance': {
                'value': props.distanceValue,
                'unit': props.distanceUnit
            }
        };
        _this.distanceUnits = props.distanceUnits.map(function (item) {
            return React.createElement(
                'option',
                { key: item.abbreviation, value: '{item.abbreviation}' },
                item.name
            );
        });
        return _this;
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
                null,
                React.createElement(
                    'label',
                    null,
                    'Time:'
                ),
                React.createElement('input', { type: 'text' }),
                React.createElement(
                    'label',
                    null,
                    'Distance:'
                ),
                React.createElement('input', { type: 'text' }),
                React.createElement(
                    'select',
                    null,
                    this.distanceUnits
                )
            );
        }
    }]);

    return Form;
}(React.Component);