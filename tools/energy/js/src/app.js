class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          'gender': this.props.genders[0],
          'dateOfBirth': {
              'value': new Date(),
          },
          'mass': {
              'value': 0,
              'unit': null,
              'originalUnit': null
          },
          'height': {
              'value': 0,
              'unit': null,
              'originalUnit': null
          },
          pal: this.props.pals[0],
      };
      this.onGenderChange = this.onGenderChange.bind(this);
      this.onDateOfBirthChange = this.onDateOfBirthChange.bind(this);
      this.onMassChange = this.onMassChange.bind(this);
      this.onHeightChange = this.onHeightChange.bind(this);
      this.onPALChange = this.onPALChange.bind(this);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    onGenderChange(value) {
        this.setState({'gender': value});
    }

    onDateOfBirthChange(value, data) {
        this.setState({'dateOfBirth': data});
    }

    onMassChange(value, originalValue, originalUnit) {
        if (value.length) {
            value = parseFloat(value);
        }
        var mass = {
            'value': value,
            'originalValue': originalValue,
            'originalUnit': originalUnit
        }
        this.setState({'mass': mass});
    }

    onHeightChange(value, originalValue, originalUnit) {
        if (value.length) {
            value = parseFloat(value);
        }
        var height = {
            'value': value,
            'originalValue': originalValue,
            'originalUnit': originalUnit
        }
        this.setState({'height': height});
    }

    onPALChange(value) {
        this.setState({'pal': value});
    }

    render() {
        var gender = this.state.gender,
            dob = this.state.dateOfBirth,
            mass = this.state.mass.value,
            height = this.state.height.value,
            pal = this.state.pal,
            display = '';
        if (gender && dob && mass && height && pal) {
            var bmrProcessors = [Fit.energy.HB, Fit.energy.RevisedHB, Fit.energy.MSJ],
                rmrProcessor = new Fit.energy.RMR(gender, dob.value, mass, height),
                teeEstimators = [Fit.energy.ChildTEE, Fit.energy.AdultTEE],
                bmrRows = [],
                teeRows = [];

            for (var i = 0; i < bmrProcessors.length; i++) {
                var bmrProcessor = new bmrProcessors[i](gender.code),
                    value = bmrProcessor.predict(dob.value, mass, height),
                    name = bmrProcessors[i].name,
                    row = <tr key={name}>
                            <td>{name}</td>
                            <td>{value}</td>
                        </tr>;
                    bmrRows.push(row);
            }

            var restingMetabolicRateKcals = rmrProcessor.quick();

            for (var i = 0; i < teeEstimators.length; i++) {
                var estimator = new teeEstimators[i](gender.code, pal.code),
                    value = estimator.predict(dob.value, mass, height),
                    name = teeEstimators[i].name,
                    row = <tr key={name}>
                            <td>{name}</td>
                            <td>{value}</td>
                        </tr>;
                teeRows.push(row);
            }

            var display = <div className="columns">
                <div className="column">
                    <h2 className="subtitle">Basal Metabolic Rate</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Value (Kilocalories)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bmrRows}
                        </tbody>
                    </table>

                </div>
                <div className="column">
                    <h2 className="subtitle">Total Energy Expenditure</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Value (Kilocalories)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teeRows}
                        </tbody>
                    </table>
                </div>
            </div>;

        }

        return (
            <div>
                <Form pals={this.props.pals} massUnits={this.props.massUnits} massUnit={this.props.massUnit} distanceUnits={this.props.distanceUnits} distanceUnit={this.props.distanceUnit} genders={this.props.genders} genderChange={this.onGenderChange} dateOfBirthChange={this.onDateOfBirthChange} massChange={this.onMassChange} heightChange={this.onHeightChange} palChange={this.onPALChange} />
                {display}
            </div>

        );
    }
}


const massUnits = [
    {
        'name': 'Kilograms',
        'code': 'kg'
    },
    {
        'name': 'Lb',
        'code': 'lb'
    }
],
distanceUnits = [
    {
        'name': 'Meters',
        'code': 'm'
    },
    {
        'name': 'Feet',
        'code': 'feet'
    },
    {
        'name': 'Inches',
        'code': 'inches'
    }
],
genders = [
    {
        'name': 'Male',
        'code': Fit.Gender.Male
    },
    {
        'name': 'Female',
        'code': Fit.Gender.Female
    }
],
pals = [
    {
        'name': 'Sedendary',
        'code': Fit.PAL.Sedentary,
    },
    {
        'name': 'Low',
        'code': Fit.PAL.Low
    },
    {
        'name': 'Active',
        'code': Fit.PAL.Active
    },
    {
        'name': 'Very Active',
        'code': Fit.PAL.VeryActive
    }
];

let domContainer = document.querySelector('#app');
ReactDOM.render(<App pals={pals} massUnits={massUnits} massUnit={massUnits[0]} distanceUnits={distanceUnits} distanceUnit={distanceUnits[0]} genders={genders} />, domContainer);
