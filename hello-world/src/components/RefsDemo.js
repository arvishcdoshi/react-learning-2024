import React, { Component } from 'react'

class RefsDemo extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    this.cbRef = null
    this.setCbRef = (element) => {
        this.cbRef = element
    }
  }

  componentDidMount() {
    console.log(this.cbRef)
    if (this.cbRef) {
        this.cbRef.focus()
    }
    // this.inputRef.current.focus()
  }

  clickHandler = () => {
    // alert(this.inputRef.current.value)
    alert(this.cbRef.value)
  }
  
  render() {
    return (
      <div>
        {/* <input type="text" ref={this.inputRef} /> */}
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo
