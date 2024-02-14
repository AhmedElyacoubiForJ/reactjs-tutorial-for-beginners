import React, { Component } from 'react'

// rce snippets
class ClassComponentClick extends Component {
  clickHandler() {
    console.log('Button Clicked')
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}

export default ClassComponentClick

