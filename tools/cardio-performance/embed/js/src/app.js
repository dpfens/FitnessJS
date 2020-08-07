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
                riegelT2 = riegel.time(d2);

            var d1Miles = new Fit.conversion.UnitConverter(d1, this.props.distanceUnit.code).to('miles').val(),
                d2Miles = new Fit.conversion.UnitConverter(d2, this.props.distanceUnit.code).to('miles').val(),
                cameron = new Fit.model.aerobic.Cameron(d1Miles, t1),
                cameronT2 = cameron.time(d2Miles);

                display = <div className="columns">
                    <div className="column is-half">
                        <TimeDisplay value={t1} />
                        <UnitDisplay value={d1} unit={this.state.d1.originalUnit} />
                    </div>
                    <div className="column is-half">
                        <p className="title is-3">Peter Riegel model</p>
                        <div className="columns">
                                <div className="column">

                                <TimeDisplay value={riegelT2} />
                                <UnitDisplay value={d2} unit={this.state.d2.originalUnit} />
                            </div>
                        </div>
                        <p className="title is-3">David F. Cameron model</p>
                        <div className="columns">
                            <div className="column">
                                <TimeDisplay value={cameronT2} />
                                <UnitDisplay value={d2} unit={this.state.d2.originalUnit} />
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
