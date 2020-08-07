class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          't1': {
             'value': 0,
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
      this.distanceUnits = this.props.distanceUnits;
      this.onT1Change = this.onT1Change.bind(this);
      this.onD1Change = this.onD1Change.bind(this);
      this.onD2Change = this.onD2Change.bind(this);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    onT1Change(value) {
        this.setState({'t1': {'value': value}});
    }

    onD1Change(value, originalValue, originalUnit) {
        var d1 = {
            'value': value,
            'originalValue': originalValue,
            'originalUnit': originalUnit
        }
        this.setState({'d1': d1});
    }

    onD2Change(value, originalValue, originalUnit) {
        var d2 = {
            'value': value,
            'originalValue': originalValue,
            'originalUnit': originalUnit
        }
        this.setState({'d2': d2});
    }

    render() {
        var d1 = this.state.d1.value,
            d2 = this.state.d2.value,
            t1 = this.state.t1.value,
            display;


        if (t1 && d1 && d2) {
            var riegel = new Fit.model.aerobic.Riegel(d1, t1),
                riegelT2 = riegel.time(d2),
                riegelT2Render = Math.round(riegelT2 * 100) / 100;

            var riegelAbstractFormula = "\\text{riegel}(t_1, d_1, d_2) = t_1 \\times {d_2 \\over d_1}^\\text{coefficient}",
                riegelFormula = "= " + t1 + "\\text{ seconds} \\times {" + d2 + "\\text{m} \\over " + d1 +"\\text{m} }^{1.06}",
                riegelValue = "= " + riegelT2Render + '\\text{ seconds}',

                d1Miles = new Fit.conversion.UnitConverter(d1, this.props.distanceUnit.code).to('miles').val(),
                d2Miles = new Fit.conversion.UnitConverter(d2, this.props.distanceUnit.code).to('miles').val(),
                d1MilesRender = Math.round(d1Miles * 100) / 100,
                d2MilesRender = Math.round(d2Miles * 100) / 100,

                cameron = new Fit.model.aerobic.Cameron(d1Miles, t1),
                cameronT2 = cameron.time(d2Miles),
                cameronT2Render = Math.round(cameronT2 * 100) / 100,
                cameronAbstractFormula = '\\text{cameron}(t_1, d_1, d_2) = {t_1 \\over d_1} * { \\text{fac}(d_1) \\over \\text{fac}(d_2) } \\times d_2',
                facAbstractFormula = "\\text{where fac}(d) = 13.49681 - 0.048865 \\times d + {2.438936 \\over d^{0.7905}}",
                fullCameronAbstractFormula = cameronAbstractFormula,
                cameronFormula = '= {'+ t1 + '\\text{ seconds} \\over ' + d2MilesRender + '\\text{miles}  } \\times { \\text{fac}(' + d1MilesRender + '\\text{miles} ) \\over \\text{fac}(' + d2MilesRender + '\\text{miles}) } \\times ' + d2MilesRender + '\\text{miles}',
                cameronValue = "= " + cameronT2Render + '\\text{ seconds}';

                display = <div className="columns">
                    <div className="column is-one-third-tablet is-half-fullhd">
                        <TimeDisplay value={t1} />
                        <UnitDisplay value={d1} unit={this.state.d1.originalUnit} />
                    </div>
                    <div className="column is-two-thirds-tablet is-half-fullhd">
                        <p className="title is-3">Peter Riegel model</p>
                        <div className="columns">
                                <div className="column">

                                <TimeDisplay value={riegelT2} />
                                <UnitDisplay value={d2} unit={this.state.d2.originalUnit} />
                            </div>
                            <div className="column">
                                <KatexDisplay value={riegelAbstractFormula} />
                                <KatexDisplay value={riegelFormula} />
                                <KatexDisplay value={riegelValue} />
                            </div>
                        </div>
                        <p className="title is-3">David F. Cameron model</p>
                        <div className="columns">
                            <div className="column">
                                <TimeDisplay value={cameronT2} />
                                <UnitDisplay value={d2} unit={this.state.d2.originalUnit} />
                            </div>
                            <div className="column">
                                <KatexDisplay value={fullCameronAbstractFormula} />
                                <KatexDisplay value={cameronFormula} />
                                <KatexDisplay value={cameronValue} />
                                <KatexDisplay value={facAbstractFormula} />
                            </div>
                        </div>
                    </div>
                </div>
        } else {
            display = '';
        }


        return (
            <div>
                <div className="columns">
                    <div className="column">
                        <Form distanceUnits={this.distanceUnits} distanceUnit={this.props.distanceUnit} T1Change={this.onT1Change} D1Change={this.onD1Change} D2Change={this.onD2Change} />
                    </div>
                </div>
                {display}
            </div>
        );
    }
}


const distanceUnits = [
    {
        'name': 'Meters',
        'code': 'm'
    },
    {
        'name': 'Miles',
        'code': 'miles'
    },
    {
        'name': 'Kilometers',
        'code': 'km'
    }
]

let domContainer = document.querySelector('#app');
ReactDOM.render(<App distanceUnits={distanceUnits} distanceUnit={distanceUnits[0]} />, domContainer);
