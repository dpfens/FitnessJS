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
            't1': {
                'value': 0
            },
            'd1': {
                'value': 0,
                'unit': null,
                'originalUnit': null
            },
            'd2': {
                'value': 0,
                'unit': null,
                'originalUnit': null
            }
        };
        _this.distanceUnits = _this.props.distanceUnits;
        _this.onT1Change = _this.onT1Change.bind(_this);
        _this.onD1Change = _this.onD1Change.bind(_this);
        _this.onD2Change = _this.onD2Change.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {}
    }, {
        key: 'onT1Change',
        value: function onT1Change(value) {
            this.setState({ 't1': { 'value': value } });
        }
    }, {
        key: 'onD1Change',
        value: function onD1Change(value, originalValue, originalUnit) {
            var d1 = {
                'value': value,
                'originalValue': originalValue,
                'originalUnit': originalUnit
            };
            this.setState({ 'd1': d1 });
        }
    }, {
        key: 'onD2Change',
        value: function onD2Change(value, originalValue, originalUnit) {
            var d2 = {
                'value': value,
                'originalValue': originalValue,
                'originalUnit': originalUnit
            };
            this.setState({ 'd2': d2 });
        }
    }, {
        key: 'render',
        value: function render() {
            var d1 = this.state.d1.value,
                d2 = this.state.d2.value,
                t1 = this.state.t1.value,
                display;

            if (t1 && d1 && d2) {
                var riegel = new Fit.model.aerobic.Riegel(d1, t1),
                    riegelT2 = riegel.time(d2);

                var d1Miles = new Fit.conversion.UnitConverter(d1, this.props.distanceUnit.code).to('miles').val(),
                    d2Miles = new Fit.conversion.UnitConverter(d2, this.props.distanceUnit.code).to('miles').val(),
                    cameron = new Fit.model.aerobic.Cameron(d1Miles, t1),
                    cameronT2 = cameron.time(d2Miles);

                display = React.createElement(
                    'div',
                    { className: 'columns' },
                    React.createElement(
                        'div',
                        { className: 'column is-half' },
                        React.createElement(TimeDisplay, { value: t1 }),
                        React.createElement(UnitDisplay, { value: d1, unit: this.state.d1.originalUnit })
                    ),
                    React.createElement(
                        'div',
                        { className: 'column is-half' },
                        React.createElement(
                            'p',
                            { className: 'title is-3' },
                            'Peter Riegel model'
                        ),
                        React.createElement(
                            'div',
                            { className: 'columns' },
                            React.createElement(
                                'div',
                                { className: 'column' },
                                React.createElement(TimeDisplay, { value: riegelT2 }),
                                React.createElement(UnitDisplay, { value: d2, unit: this.state.d2.originalUnit })
                            )
                        ),
                        React.createElement(
                            'p',
                            { className: 'title is-3' },
                            'David F. Cameron model'
                        ),
                        React.createElement(
                            'div',
                            { className: 'columns' },
                            React.createElement(
                                'div',
                                { className: 'column' },
                                React.createElement(TimeDisplay, { value: cameronT2 }),
                                React.createElement(UnitDisplay, { value: d2, unit: this.state.d2.originalUnit })
                            )
                        )
                    )
                );
            } else {
                display = '';
            }

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: 'columns' },
                    React.createElement(
                        'div',
                        { className: 'column' },
                        React.createElement(Form, { distanceUnits: this.distanceUnits, distanceUnit: this.props.distanceUnit, T1Change: this.onT1Change, D1Change: this.onD1Change, D2Change: this.onD2Change })
                    )
                ),
                display
            );
        }
    }]);

    return App;
}(React.Component);

var distanceUnits = [{
    'name': 'Meters',
    'code': 'm'
}, {
    'name': 'Miles',
    'code': 'miles'
}, {
    'name': 'Kilometers',
    'code': 'km'
}];

var domContainer = document.querySelector('#app');
ReactDOM.render(React.createElement(App, { distanceUnits: distanceUnits, distanceUnit: distanceUnits[0] }), domContainer);