'use strict';

class Input extends React.Component {
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
                    <input className="input" maxLength={this.maxLength} type={this.props.type} onChange={this.onChangeHandler} placeholder={this.props.placeholder} />
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
        console.log(option);
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
            <div className="column is-half is-mobile">
                <h2 className="subtitle">Demographics</h2>
                <div className="columns">
                    <div className="column is-half">
                        <Dropdown label="Gender" options={this.props.genders} valueChange={this.props.genderChange} helpText="The gender of the athlete" />
                    </div>
                    <div className="column is-half">
                        <Input type="tel" label="Age" maxLength="3" valueChange={this.props.ageChange} helpText="Age is provided in years" />
                    </div>
                </div>
            </div>
            <div className="column is-half is-mobile">
                <h2 className="subtitle">Your Performance</h2>
                <div className="columns">
                    <div className="column is-half">
                        <Input type="tel" label="Repetitions" maxLength="4" helpText="The number of full repetitions" valueChange={this.props.repChange} />
                    </div>
                    <div className="column is-half">
                        <UnitValue label="Weight" maxLength="4" returnUnit={this.props.massUnit} valueChange={this.props.massChange} units={this.props.massUnits} helpText="The weight lifted for each repetition" />
                    </div>
                </div>
            </div>
        </form>
    );
  }
}
