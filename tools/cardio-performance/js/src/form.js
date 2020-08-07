'use strict';


class DurationInput extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            'value': 0,
            'displayValue': 0,
            'hours': 0,
            'minutes': 0,
            'seconds': 0
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
            this.props.valueChange(totalDuration);
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
            this.props.valueChange(totalDuration);
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
            this.props.valueChange(totalDuration);
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


class UnitValue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'displayValue': 0,
            'value': 0,
            'unit': props.units[0]
        }
        this.units = props.units.map((item, index) => <option key={index} value={index}>{item.name}</option>);
        this.onValueChange = this.onValueChange.bind(this);
        this.onUnitChange = this.onUnitChange.bind(this);
    }

    onValueChange(event) {
        var value = event.target.value,
        outputValue = this.calculateValue(value, this.state.unit, this.props.returnUnit);
        this.setState({'displayValue': value});
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
                    </div>
                </div>
            </div>
        );
    }
}


class Form extends React.Component {

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
                <DurationInput valueChange={this.props.T1Change} />
                <UnitValue label="Distance" maxLength="6" returnUnit={this.props.distanceUnit} valueChange={this.props.D1Change} units={this.props.distanceUnits} />
            </div>
            <div className="column is-half">
                <h2 className="subtitle">Predicted Performance</h2>
                <UnitValue label="Distance" maxLength="6" returnUnit={this.props.distanceUnit} valueChange={this.props.D2Change} units={this.props.distanceUnits} />
            </div>
        </form>
    );
  }
}
