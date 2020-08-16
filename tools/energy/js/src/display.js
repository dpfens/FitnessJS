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
