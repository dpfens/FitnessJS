class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          'gender': this.props.genders[0],
          'age': 0,
          'reps': {
             'value': 0,
          },
          'mass': {
              'value': '',
              'unit': null,
              'originalUnit': null
          },
      };
      this.onGenderChange = this.onGenderChange.bind(this);
      this.onAgeChange = this.onAgeChange.bind(this);
      this.onRepChange = this.onRepChange.bind(this);
      this.onMassChange = this.onMassChange.bind(this);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    onGenderChange(value) {
        this.setState({'gender': value});
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
        var processors = [Fit.strength.Abadie, Fit.strength.Baechle, Fit.strength.Brzycki, Fit.strength.Epley, Fit.strength.Landers, Fit.strength.Lombardi, Fit.strength.Mayhew, Fit.strength.McGlothin, Fit.strength.OConnor, Fit.strength.Wathan],
            display = <h2 className="title text-center">Not enough information to predict 1-RM :-(</h2>;

        if (this.state.repetitions && this.state.mass.value && this.state.mass.originalUnit) {
            display = <div>
                <h2 className="subtitle">1-RM estimations</h2>
                <RMDisplay processors={processors} gender={this.state.gender} age={this.state.age} repetitions={this.state.repetitions} mass={this.state.mass} />
            </div>
        }
        return (
            <div>
                <Form massUnits={this.props.massUnits} massUnit={this.props.massUnit} genders={this.props.genders} genderChange={this.onGenderChange} ageChange={this.onAgeChange} repChange={this.onRepChange} massChange={this.onMassChange} />
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
