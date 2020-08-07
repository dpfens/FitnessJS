class TimeDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    breakdown(value) {
        var hours = Math.floor(value / 3600),
        value = value % 3600,
        minutes = Math.floor(value / 60),
        seconds = value % 60;
        return {
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    formatSeconds(value) {
        var parts = this.breakdown(value),
            output = '',
            parts = [parts.hours, parts.minutes, Math.round(parts.seconds * 100) / 100];
        for (var i = 0; i < parts.length; i++) {
            var part = parts[i];
            if (!output && !part) { continue; }
            if (part < 10) {
                part = '0' + part;
            }
            if (output) {
                part = ':' + part;
            }
            output += part;
        }
        return output;
    }

    render() {
        if (this.props.value > 0) {
            var formattedValue = this.formatSeconds(this.props.value);
            return (
                <p className="title is-1">{formattedValue}</p>
            )
        }
        return <p className="title is-3">This model does not support values this large</p>

    }
}



class UnitDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.unit) {
            return <p className="subtitle is-4">{this.props.value} {this.props.unit.name}</p>
        }
        return <p></p>
    }
}


class KatexDisplay extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidUpdate() {
        var element = ReactDOM.findDOMNode(this);
        katex.render(this.props.value, element, {
            throwOnError: false
        });
    }

    render() {
        return <p></p>
    }
}
