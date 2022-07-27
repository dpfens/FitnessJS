var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RMDisplay = function (_React$Component) {
    _inherits(RMDisplay, _React$Component);

    function RMDisplay(props) {
        _classCallCheck(this, RMDisplay);

        return _possibleConstructorReturn(this, (RMDisplay.__proto__ || Object.getPrototypeOf(RMDisplay)).call(this, props));
    }

    _createClass(RMDisplay, [{
        key: "render",
        value: function render() {
            var rows = [],
                gender = this.props.gender.code,
                age = this.props.age,
                processors = this.props.processors,
                repetitions = this.props.repetitions,
                massValue = this.props.mass.value,
                massUnit = this.props.mass.originalUnit.code;
            for (var i = 0; i < processors.length; i++) {
                var processorCls = processors[i];
                if (!processorCls.isValid(gender, age, repetitions, massValue)) {
                    continue;
                }
                var processor = new processorCls(repetitions),
                    predictedMassKg = processor.predict(massValue),
                    name = processors[i].name;


                if (predictedMassKg < 0) {
                    continue;
                }
                var predictedMass = predictedMassKg;
                if (massUnit === 'lb') {
                  predictedMass = predictedMassKg * 2.2;
                }
                var predictedMassRender = Math.round(predictedMass * 100) / 100;

                var row = React.createElement(
                    "tr",
                    { key: name },
                    React.createElement(
                        "td",
                        null,
                        name
                    ),
                    React.createElement(
                        "td",
                        null,
                        predictedMassRender
                    )
                );

                rows.push(row);
            }

            var caption = React.createElement(
                "caption",
                null,
                this.props.caption
            );
            return React.createElement(
                "table",
                { className: "table is-fullwidth" },
                caption,
                React.createElement(
                    "thead",
                    null,
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "th",
                            null,
                            "Name"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "Mass (",
                            massUnit,
                            ")"
                        )
                    )
                ),
                React.createElement(
                    "tbody",
                    null,
                    rows
                )
            );
        }
    }]);

    return RMDisplay;
}(React.Component);

var UnitDisplay = function (_React$Component2) {
    _inherits(UnitDisplay, _React$Component2);

    function UnitDisplay(props) {
        _classCallCheck(this, UnitDisplay);

        return _possibleConstructorReturn(this, (UnitDisplay.__proto__ || Object.getPrototypeOf(UnitDisplay)).call(this, props));
    }

    _createClass(UnitDisplay, [{
        key: "render",
        value: function render() {
            if (this.props.unit) {
                return React.createElement(
                    "p",
                    { className: "subtitle is-4" },
                    this.props.value,
                    " ",
                    this.props.unit.name
                );
            }
            return React.createElement("p", null);
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
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            var element = ReactDOM.findDOMNode(this);
            katex.render(this.props.value, element, {
                throwOnError: false
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement("p", null);
        }
    }]);

    return KatexDisplay;
}(React.Component);
