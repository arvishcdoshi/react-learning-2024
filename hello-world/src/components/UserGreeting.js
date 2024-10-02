import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
  render() {
    
    // SHORT CIRCUIT OPERATOR
    return this.state.isLoggedIn && <div>Welcome Arvish</div>

    // TERNARY OPERATOR
    // return (
    //     this.state.isLoggedIn ? <div>Welcome Arvish</div> : <div>Welcome Guest</div>
    // )
    
    // CONDITIONAL RENDERING - ELEMENT VARIABLES
    // let message
    // if (this.state.isLoggedIn) {
    //     message = <div>Welcome Arvish</div>
    // } else {
    //     message = <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>

    // CONDITIONAL RENDERING - IF/ELSE 

    // if (this.state.isLoggedIn) {
    //     return (
    //         <div>
    //             Welcome Arvish
    //         </div>
    //     )
    // }

    // else {
    //     return (
    //         <div>
    //             Welcome Guest
    //         </div>
    //     )
    // }
//     return (
//       <div>
//         <div>Welcome Arvish</div>
//         <div>Welcome Guest</div>
//       </div>
//     )
   }
}

export default UserGreeting
