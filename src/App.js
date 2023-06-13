// 1. Create a Class and Function based component to implement Timer with lifecycle methods.

import React from "react";

class TimerClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((prevState) => ({
      timer: prevState.timer + 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>Timer (Class-based Component)</h1>
        <p>Seconds: {this.state.timer}</p>
      </div>
    );
  }
}

export default TimerClassComponent;
