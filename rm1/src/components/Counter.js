import React, { Component } from 'react'

//react class component
export default class Counter extends Component {
    constructor(){
        super()
    }

state = {
    numberCounter: 0
}

 IncreaseCount = () => {
    this.setState({numberCounter : ++this.state.numberCounter});
};

 DecreaseCount = () => {
    this.setState({numberCounter : --this.state.numberCounter});
};
    
  render() {
    return (
      <div>
        <h1>Number Counter Component</h1>
        <button onClick={this.DecreaseCount}>Decrease</button>
        Counter : {this.state.numberCounter}
        <button onClick={this.IncreaseCount}>Increase</button>
      </div>
    )
  }
}
