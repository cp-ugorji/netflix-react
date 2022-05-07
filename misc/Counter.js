import React, { Component } from 'react';

//react class component
export default class Counter extends Component {
  state = {
    numberCounter: 0
  };

  increaseCount = () => {
    this.setState({ numberCounter: ++this.state.numberCounter });
  };

  decreaseCount = () => {
    this.setState({ numberCounter: --this.state.numberCounter });
  };

  render() {
    return (
      <div>
        <h1>Number Counter Component</h1>
        <button onClick={this.decreaseCount}>Decrease</button>
        Counter : {this.state.numberCounter}
        <button onClick={this.increaseCount}>Increase</button>
      </div>
    );
  }
}
