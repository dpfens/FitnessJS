class RMDisplay extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var rows = [],
            processors = this.props.processors,
            repetitions = this.props.repetitions,
            massValue = this.props.mass.value,
            massUnit = this.props.mass.originalUnit.name
        for (var i = 0; i < processors.length; i++) {
            var processor = new processors[i](repetitions),
                predictedMass = processor.predict(massValue),
                name = processors[i].name,
                row = <tr key={name}>
                    <td>{name}</td>
                    <td>{predictedMass}</td>
                    <td>{massUnit}</td>
                </tr>
                rows.push(row);
        }
        return <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Mass</th>
                    <th>Unit</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
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
