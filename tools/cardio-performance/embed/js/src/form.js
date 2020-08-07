'use strict';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        'time': {
            'value': props.timeValue,
            'rawValue': props.rawValue,
        },
        'distance': {
            'value': props.distanceValue,
            'unit': props.distanceUnit,
        }
    }
    this.distanceUnits = props.distanceUnits.map((item) => <option key={item.abbreviation} value="{item.abbreviation}">{item.name}</option>);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }



  render() {
    return (
        <form>
            <label>Time:</label>
            <input type="text" />

            <label>Distance:</label>
            <input type="text" />
            <select>
                {this.distanceUnits}
            </select>
        </form>
    );
  }
}
