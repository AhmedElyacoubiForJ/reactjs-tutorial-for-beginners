import React, { Component } from 'react'

// rce snippets
class ClassComponentEventBind extends Component {
  // rconst snippets
  constructor(props) {
    super(props)

    this.state = {
      message: 'Hello'
    }
    // third approch
    // this.clickHandler = this.clickHandler.bind(this)
  }

  // clickHandler() {
  //   this.setState({
  //     message: 'GoodBye!'
  //   })
  //   console.log(this)
  // }

  // fourth approach class property as Arrow function
  clickHandler = () => {
      this.setState({
      message: 'GoodBye!'
    })
  }
  
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/*
        first approach binding in the render method
        <button onClick={this.clickHandler.bind(this)}>Click</button>
        !!! not use it because of performance reason
        */}

        {/*
        second approach Arrow function in render
        <button onClick={() => this.clickHandler()}>Click</button>
        */}

        {/*
        third approach is the most used also in the React documentations.
        s. line 13 binding in the class contructor
        <button onClick={this.clickHandler}>Click</button>
        is the best option
        */}

        {/* fourth approach handler arrow function as class property */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default ClassComponentEventBind
