import React, { Component } from 'react'

class Eventbind extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Hello'
    }

    {/* 3rd Approach */}
    // this.clickHandler = this.clickHandler.bind(this)
  }


//   below function is for 1st, 2nd & 3rd approach.
//   clickHandler() {
//     this.setState({
//         message: 'Goodbye'
//     })
//     console.log(this)
//   }

    // Arrow function for the 4th Approach. `this` keyword gets the expected value 
    // within the handler method.
    clickHandler = () => {
        console.log('28', this)
        this.setState({
        'message': 'GoodBye'
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        
        {/* 1st Approach -- line no 22 will print EventBind component instance and not undefined */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

        {/* 2nd Approach -- Arrow function approach */}
        {/* <button onClick={ () => this.clickHandler() }>Click</button> */}
      
        {/* 3rd Approach */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default Eventbind
