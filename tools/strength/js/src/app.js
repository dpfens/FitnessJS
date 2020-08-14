class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          'gender': this.props.genders[0],
          'age': 18,
          'reps': {
             'value': 0,
          },
          'mass': {
              'value': 0,
              'unit': null,
              'originalUnit': null
          },
          'rm': {
              'value': 0,
              'unit': null,
              'originalUnit': null
          }
      };
      this.onGenderChange = this.onGenderChange.bind(this);
      this.onRepChange = this.onRepChange.bind(this);
      this.onMassChange = this.onMassChange.bind(this);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    onGenderChange(value) {
        this.setState({'t1': {'value': value}});
    }

    onAgeChange(value) {
        this.setState({'age': value});
    }

    onRepChange(value) {
        if (value.length) {
            value = parseInt(value);
        }
        this.setState({'repetitions': value});
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

    render() {
        console.log(this.state);
        var processors = [Fit.strength.Abadie, Fit.strength.Baechle, Fit.strength.Brzycki, Fit.strength.Epley, Fit.strength.Landers, Fit.strength.Lombardi, Fit.strength.Mayhew, Fit.strength.McGlothin, Fit.strength.OConnor, Fit.strength.Wathan],
            display = '';

        if (this.state.repetitions && this.state.mass.value && this.state.mass.originalUnit) {
            display = <RMDisplay processors={processors} repetitions={this.state.repetitions} mass={this.state.mass} />
        }
        return (
            <div>
                <div className="columns">
                    <div className="column">
                        <Form massUnits={this.props.massUnits} massUnit={this.props.massUnit} genders={this.props.genders} genderChange={this.onGenderChange} repChange={this.onRepChange} massChange={this.onMassChange} />
                    </div>
                    <div className="column">
                        {display}
                    </div>
                </div>
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
genders = [
    {
        'name': 'Male',
        'code': Fit.Gender.Male
    },
    {
        'name': 'Female',
        'code': Fit.Gender.Female
    }
]

let domContainer = document.querySelector('#app');
ReactDOM.render(<App massUnits={massUnits} massUnit={massUnits[0]} genders={genders} />, domContainer);
