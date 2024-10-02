import React, { Component } from 'react'

class Counter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  increment() {
    // this.setState({
    //     count: this.state.count + 1
    // }, () => {console.log('Callback value', this.state.count)})
   
    // prevState is the previous state of the component --> based on which we shall perform any further operations.
    this.setState( (prevState, props) => ({
        count: prevState.count + 1
    }))
  }

  incrementFive() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }
  

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick= { () => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter
