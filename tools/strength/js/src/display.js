class RMDisplay extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var rows = [],
            gender = this.props.gender.code,
            age = this.props.age,
            processors = this.props.processors,
            repetitions = this.props.repetitions,
            massValue = this.props.mass.value,
            massUnit = this.props.mass.originalUnit.code
        for (var i = 0; i < processors.length; i++) {
            var processorCls = processors[i];
            if (!processorCls.isValid(gender, age, repetitions, massValue)) {
                continue;
            }
            var processor = new processorCls(repetitions),
                predictedMass = processor.predict(massValue),
                name = processors[i].name;

            if (predictedMass < 0) {
                continue;
            }

            var predictedMassRender = Math.round(predictedMass * 100 ) / 100;

            var row = <tr key={name}>
                    <td>{name}</td>
                    <td>{predictedMassRender}</td>
                </tr>

                rows.push(row);
        }

        var caption = <caption>{this.props.caption}</caption>
        return <table className="table is-fullwidth">
            {caption}
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Mass ({massUnit})</th>
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
