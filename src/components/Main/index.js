import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    // this.state = {count: props.initialCount};
    // this.tick = this.tick.bind(this);
  }
  componentDidMount() {
    console.log('COMPONENT DID MOUNT');
  }
  tick() {
    this.setState({count: this.state.count + 1});
  }
  render() {
    const { increment, count } = this.props;

    return (
      <div>
        Clicks: {count}
        <br/>
        <RaisedButton label="Primary" primary={true} onClick={increment} />
      </div>
    );
  }
}
// Counter.propTypes = { initialCount: React.PropTypes.number };
Counter.defaultProps = { initialCount: 0 };
