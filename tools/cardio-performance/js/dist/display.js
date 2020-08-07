var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimeDisplay = function (_React$Component) {
    _inherits(TimeDisplay, _React$Component);

    function TimeDisplay(props) {
        _classCallCheck(this, TimeDisplay);

        return _possibleConstructorReturn(this, (TimeDisplay.__proto__ || Object.getPrototypeOf(TimeDisplay)).call(this, props));
    }

    _createClass(TimeDisplay, [{
        key: 'breakdown',
        value: function breakdown(value) {
            var hours = Math.floor(value / 3600),
                value = value % 3600,
                minutes = Math.floor(value / 60),
                seconds = value % 60;
            return {
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }
    }, {
        key: 'formatSeconds',
        value: function formatSeconds(value) {
            var parts = this.breakdown(value),
                output = '',
                parts = [parts.hours, parts.minutes, Math.round(parts.seconds * 100) / 100];
            for (var i = 0; i < parts.length; i++) {
                var part = parts[i];
                if (!output && !part) {
                    continue;
                }
                if (part < 10) {
                    part = '0' + part;
                }
                if (output) {
                    part = ':' + part;
                }
                output += part;
            }
            return output;
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.props.value > 0) {
                var formattedValue = this.formatSeconds(this.props.value);
                return React.createElement(
                    'p',
                    { className: 'title is-1' },
                    formattedValue
                );
            }
            return React.createElement(
                'p',
                { className: 'title is-3' },
                'This model does not support values this large'
            );
        }
    }]);

    return TimeDisplay;
}(React.Component);

var UnitDisplay = function (_React$Component2) {
    _inherits(UnitDisplay, _React$Component2);

    function UnitDisplay(props) {
        _classCallCheck(this, UnitDisplay);

        return _possibleConstructorReturn(this, (UnitDisplay.__proto__ || Object.getPrototypeOf(UnitDisplay)).call(this, props));
    }

    _createClass(UnitDisplay, [{
        key: 'render',
        value: function render() {
            if (this.props.unit) {
                return React.createElement(
                    'p',
                    { className: 'subtitle is-4' },
                    this.props.value,
                    ' ',
                    this.props.unit.name
                );
            }
            return React.createElement('p', null);
        }
    }]);

    return UnitDisplay;
}(React.Component);

var KatexDisplay = function (_React$Component3) {
    _inherits(KatexDisplay, _React$Component3);

    function KatexDisplay(props) {
        _classCallCheck(this, KatexDisplay);

        return _possibleConstructorReturn(this, (KatexDisplay.__proto__ || Object.getPrototypeOf(KatexDisplay)).call(this, props));
    }

    _createClass(KatexDisplay, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var element = ReactDOM.findDOMNode(this);
            katex.render(this.props.value, element, {
                throwOnError: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement('p', null);
        }
    }]);

    return KatexDisplay;
}(React.Component);