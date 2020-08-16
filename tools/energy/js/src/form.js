'use strict';

class DateInput extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
          'value': null,
          'year': props.year || new Date().getFullYear(),
          'month': props.month || 0,
          'day': props.day || 1
      }
      this.years = this.getYears();
      this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      this.days = [];
      this.updateDays(this.state.year, this.state.month);
      this.onYearChange = this.onYearChange.bind(this);
      this.onMonthChange = this.onMonthChange.bind(this);
      this.onDayChange = this.onDayChange.bind(this);

      this.label = '';
      if (this.props.label) {
          this.label = <label className="label">{this.props.label}</label>
      }

      this.helpText = '';
      if (this.props.helpText) {
          this.helpText = <p className="help">{this.props.helpText}</p>
      }
    }

    getYears() {
      var now = new Date(),
          upperBoundYear = now.getFullYear(),
          lowerBoundYear = upperBoundYear - 100,
          years = [];

      for (var i = upperBoundYear; i > lowerBoundYear; i--) {
        years.push(i);
      }
      return years;
    }

    updateDays(year, month) {
      var daysInMonth = this.daysInMonth(year, month),
          output = [];
      for (var i = 0; i < daysInMonth; i++) {
        output.push(i + 1);
      }
      this.days = output;
    }

    daysInMonth(year, month) {
      return new Date(year, month, 0).getDate();
    }

    onYearChange(event) {
      var rawValue = event.target.value,
          value = parseInt(rawValue),
          dateValue = new Date(value, this.state.month, this.state.day);
      this.updateDays(this.state.year, value);
      this.setState({'year': value, 'value': dateValue});

      if(this.props.valueChange) {
        this.props.valueChange(dateValue, this.state);
      }
    }

    onMonthChange(event) {
      var rawValue = event.target.value,
          value = parseInt(rawValue) + 1,
          dateValue = new Date(this.state.year, value, this.state.day);
      this.updateDays(this.state.year, value);
      this.setState({'month': value, 'value': dateValue});
      if(this.props.valueChange) {
        this.props.valueChange(dateValue, this.state);
      }
    }

    onDayChange(event) {
      var rawValue = event.target.value,
          value = parseInt(rawValue),
          dateValue = new Date(this.state.year, this.state.month, value);
      this.setState({'day': value, 'value': dateValue});
      if(this.props.valueChange) {
        this.props.valueChange(dateValue, this.state);
      }
    }

    render() {
      var years = this.years.map((value) => <option key={value} value={value}>{value}</option>),
          days = this.days.map((value, index) => <option key={index} value={index}>{value}</option>),
          months = this.months.map((value, index) => <option key={index} value={index}>{value}</option>);

      return <div className="field">
      {this.label}
      <div className="control select multiple">
        <select name="year" onChange={this.onYearChange}>{years}</select>
        <select name="month" onChange={this.onMonthChange}>{months}</select>
        <select name="day" onChange={this.onDayChange}>{days}</select>
      </div>
      {this.helpText}
      </div>
    }
}


class NumberInput extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            'value': 0
        }
        this.type = this.props.type || 'text';
        this.maxLength = this.props.maxLength || '';
        this.label = '';
        this.helpText = '';
        if (this.props.helpText) {
            this.helpText = <p className="help">{this.props.helpText}</p>
        }
        if (this.props.label) {
            this.label = <label className="label">{this.props.label}</label>
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    isValidInput(content) {
      var validCharacters = '0123456789.';
      for (var i = 0; i < content.length; i++) {
        var character = content[i],
            isValidCharacter = validCharacters.indexOf(character) > -1;
        if (!isValidCharacter) {
          return false;
        }
      }
      return true;
    }


    onChangeHandler(event) {
        var rawValue = event.target.value,
            value;

        if (!this.isValidInput(rawValue)) {
          return;
        }

        if (rawValue) {
          value = parseFloat(rawValue);
        } else {
          value = 0
        }

        this.setState({'value': rawValue});
        if (this.props.valueChange) {
            this.props.valueChange(rawValue);
        }
    }

    render() {
        return (
            <div className="field">
                {this.label}
                <p className="control">
                    <input value={this.state.value} className="input" maxLength={this.maxLength} type={this.props.type} onChange={this.onChangeHandler} placeholder={this.props.placeholder} />
                </p>
                {this.helpText}
            </div>
        )
    }
}


class Dropdown extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            'value': 0
        }
        this.label = '';
        if (this.props.label) {
            this.label = <label className="label">{this.props.label}</label>
        }
        this.helpText = '';
        if (this.props.helpText) {
            this.helpText = <p className="help">{this.props.helpText}</p>
        }
        this.options = props.options.map((item, index) => <option key={index} value={index}>{item.name}</option>);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(event) {
        var rawValue = event.target.value,
            option = this.props.options[rawValue];
        this.setState({'value': option});
        if (this.props.valueChange) {
            this.props.valueChange(option);
        }
    }

    render() {

        return (
            <div className="field">
                {this.label}
                <div className="control">
                    <div className="select">
                        <select onChange={this.onChangeHandler} >{this.options}</select>
                    </div>
                </div>
                {this.helpText}
            </div>
        )
    }
}


class UnitValue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'displayValue': '',
            'value': 0,
            'unit': props.units[0]
        }
        this.type = this.props.type || 'text';
        this.maxLength = this.props.maxLength || '';
        this.units = props.units.map((item, index) => <option key={index} value={index}>{item.name}</option>);
        this.onValueChange = this.onValueChange.bind(this);
        this.onUnitChange = this.onUnitChange.bind(this);
    }

    onValueChange(event) {
        var rawValue = event.target.value,
            value,
            outputValue;
        if (rawValue) {
            value = parseFloat(rawValue);
        } else {
            value = 0;
        }
        outputValue = this.calculateValue(value, this.state.unit, this.props.returnUnit);
        this.setState({'displayValue': rawValue, 'value': value});
        if (this.props.valueChange) {
            this.props.valueChange(outputValue, value, this.state.unit);
        }
    }

    onUnitChange(e) {
        var value = event.target.value,
            unit = this.props.units[value],
        outputValue = this.calculateValue(this.state.displayValue, unit, this.props.returnUnit);
        this.setState({'unit': unit});

        if (this.props.valueChange) {
            this.props.valueChange(outputValue, value, unit);
        }
    }

    calculateValue(value, from, to) {
        var converter = new Fit.conversion.UnitConverter(value, from.code).to(to.code),
            output = converter.val();
        return output;
    }

    render() {
        var label;
        if (this.props.label) {
            label = <label className="label">{this.props.label}</label>;
        } else {
            label = '';
        }

        var helpText = ''
        if(this.props.helpText) {
            helpText = <p className="help">{this.props.helpText}</p>
        }

        return (
            <div className="field unit-value">
                {label}
                <div className="control">
                    <input type={this.type} className="input" maxLength={this.maxLength} onChange={this.onValueChange} value={this.state.displayValue} />
                    <div className="select">
                        <select onChange={this.onUnitChange} >{this.units}</select>
                    </div>
                </div>
                {helpText}
            </div>
        );
    }
}


class Form extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <form className="columns is-mobile">
            <div className="column is-half">
                <Dropdown label="Gender" options={this.props.genders} valueChange={this.props.genderChange} helpText="The gender of the person" />
                <DateInput label="Date of Birth" helpText="Date of birth of the person" valueChange={this.props.dateOfBirthChange} />
                <Dropdown label="PAL" options={this.props.pals} valueChange={this.props.palChange} helpText="Physical Activity Level (PAL) of the person" />
            </div>
            <div className="column is-half">
            <UnitValue label="Weight" maxLength="4" returnUnit={this.props.massUnit} valueChange={this.props.massChange} units={this.props.massUnits} helpText="The weight of the person" />
            <UnitValue label="Height" maxLength="4" returnUnit={this.props.distanceUnit} valueChange={this.props.heightChange} units={this.props.distanceUnits} helpText="The height of the person" />
            </div>
        </form>
    );
  }
}
