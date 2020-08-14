'use strict';


class DurationInput extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            'value': this.props.value || 0,
            'hours': this.props.hours || 0,
            'minutes': this.props.minutes || 0,
            'seconds': this.props.seconds || 0
        }
        this.onHourChangeHandler = this.onHourChangeHandler.bind(this);
        this.onMinuteChangeHandler = this.onMinuteChangeHandler.bind(this);
        this.onSecondChangeHandler = this.onSecondChangeHandler.bind(this);
    }

    onHourChangeHandler(event) {
        var rawValue = event.target.value,
            value;
        if (rawValue) {
            value = parseFloat(rawValue);
        } else {
            value = 0;
        }
        var totalDuration = this.calculateDuration(value, this.state.minutes, this.state.seconds);
        this.setState({'hours': rawValue, 'value': totalDuration});
        if (this.props.valueChange) {
            var hours = rawValue,
                minutes = this.state.minutes,
                seconds = this.state.seconds;
            this.props.valueChange(totalDuration, hours, minutes, seconds);
        }
    }

    onMinuteChangeHandler(event) {
        var rawValue = event.target.value,
            value;
        if (rawValue) {
            value = parseFloat(rawValue);
        } else {
            value = 0;
        }
        var totalDuration = this.calculateDuration(this.state.hours, value, this.state.seconds);
        this.setState({'minutes': rawValue, 'value': totalDuration});
        if (this.props.valueChange) {
            var hours = this.state.hours,
                minutes = rawValue,
                seconds = this.state.seconds;
            this.props.valueChange(totalDuration, hours, minutes, seconds);
        }
    }

    onSecondChangeHandler(event) {
        var rawValue = event.target.value,
            value;
        if (rawValue) {
            value = parseFloat(rawValue);
        } else {
            value = 0;
        }
        var totalDuration = this.calculateDuration(this.state.hours, this.state.minutes, value);
        this.setState({'seconds': rawValue, 'value': totalDuration});
        if (this.props.valueChange) {
            var hours = this.state.hours,
                minutes = this.state.minutes,
                seconds = rawValue;
            this.props.valueChange(totalDuration, hours, minutes, seconds);
        }

    }

    calculateDuration(hours, minutes, seconds) {
        var output = hours * 3600 + minutes * 60 + seconds;
        return output;
    }

    render() {
        return (
            <div className="field is-horizontal duration-input">
                <div className="field-label is-normal">
                    <label className="label">Time</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control">
                            <input type="tel" className="input" name="hours" maxLength="2" onChange={this.onHourChangeHandler} value={this.state.hours} />:
                            <input type="tel" className="input" name="minutes" maxLength="2" onChange={this.onMinuteChangeHandler} value={this.state.minutes} />:
                            <input type="tel" className="input" name="seconds" maxLength="10" onChange={this.onSecondChangeHandler} value={this.state.seconds} />
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}


class Input extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            'value': props.value || ''
        }
        this.type = this.props.type || 'text';
        this.maxLength = this.props.maxLength || '';

        this.helpText = '';
        if (this.props.helpText) {
            this.helpText = <p className="help">{this.props.helpText}</p>
        }

        this.label = '';
        if (this.props.label) {
            this.label = <label className="label">{this.props.label}</label>
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(event) {
        var rawValue = event.target.value;
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
                    <input className="input" maxLength={this.maxLength} value={this.state.value} type={this.props.type} onChange={this.onChangeHandler} placeholder={this.props.placeholder} />
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
            'value': props.value || props.options[0]
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
            'displayValue': props.displayValue,
            'value': props.value,
            'unit': props.unit || props.units[0]
        }
        this.type = this.props.type || 'text';
        this.maxLength = this.props.maxLength || '';
        this.units = props.units.map((item, index) => <option key={index} value={index}>{item.name}</option>);
        this.onValueChange = this.onValueChange.bind(this);
        this.onUnitChange = this.onUnitChange.bind(this);
    }

    onValueChange(event) {
        var value = event.target.value,
        outputValue = this.calculateValue(value, this.state.unit, this.props.returnUnit);
        this.setState({'value': outputValue, 'displayValue': value});
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
            <div className="field is-horizontal unit-value">
                <div className="field-label is-normal">
                    {label}
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <input type="text" className="input" maxLength={this.props.maxLength} onChange={this.onValueChange} value={this.state.displayValue} />
                            <div className="select">
                                <select onChange={this.onUnitChange} >{this.units}</select>
                            </div>
                        </div>
                        {helpText}
                    </div>
                </div>
            </div>
        );
    }
}


class BasicForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }



  render() {
    return (
        <form className="columns">
            <div className="column is-half">
                <h2 className="subtitle">Your Performance</h2>
                <DurationInput value={this.props.t1.originalValue} value={this.props.t1.value} hours={this.props.t1.hours} minutes={this.props.t1.minutes} seconds={this.props.t1.seconds} valueChange={this.props.T1Change} />
                <UnitValue label="Distance" maxLength="6" returnUnit={this.props.distanceUnit} value={this.props.d1.value} displayValue={this.props.d1.originalValue} unit={this.props.d1.originalUnit} valueChange={this.props.D1Change} units={this.props.distanceUnits} />
            </div>
            <div className="column is-half">
                <h2 className="subtitle">Predicted Performance</h2>
                <UnitValue label="Distance" maxLength="6" returnUnit={this.props.distanceUnit} value={this.props.d2.value} displayValue={this.props.d2.originalValue} unit={this.props.d2.originalUnit} valueChange={this.props.D2Change} units={this.props.distanceUnits} />
            </div>
        </form>
    );
  }
}


class AdvancedForm extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
        <form className="columns">
            <div className="column is-half">
                <h2 className="subtitle">Demographics</h2>
                <Dropdown label="Gender" options={this.props.genders} valueChange={this.props.genderChange} />
                <Input label="Age" type="tel" maxLength="3" helpText="Age in years" valueChange={this.props.ageChange} />

                <h2 className="subtitle">Your Performance</h2>
                <DurationInput value={this.props.t1.value} hours={this.props.t1.hours} minutes={this.props.t1.minutes} seconds={this.props.t1.seconds} valueChange={this.props.T1Change} />
                <UnitValue label="Distance" maxLength="6" returnUnit={this.props.distanceUnit} displayValue={this.props.d1.originalValue} unit={this.props.d1.originalUnit} valueChange={this.props.D1Change} units={this.props.distanceUnits} />
                <Dropdown label="Mode" options={this.props.modes} valueChange={this.props.modeChange} />
            </div>
            <div className="column is-half">
                <h2 className="subtitle">Predicted Performance</h2>
                <UnitValue label="Distance" maxLength="6" returnUnit={this.props.distanceUnit} displayValue={this.props.d2.originalValue} unit={this.props.d2.originalUnit} valueChange={this.props.D2Change} units={this.props.distanceUnits} />
            </div>
        </form>
    );
  }
}
