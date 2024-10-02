import React, { Component } from 'react'

class ErrorBoundary extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       hasError: false
    }
  }
  

  static getDerivedStateFromError(error) {
    return {
        hasError: true
    }
  }

  componentDidCatch(error, info) {
    console.log(error)
    console.log(info)
  }

  render() {
    if (this.state.hasError) {
        return <h1>Something went wrong</h1>
    }
    console.log('24', this.props.children)
    return this.props.children
  }
}

export default ErrorBoundary
