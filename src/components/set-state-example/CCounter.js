// rce snippets
import React, { Component } from 'react'

class CCounter extends Component {
  // rconst snippets
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  increment() {
    // chaging the state only through setState
    this.setState(
      {
        count: this.state.count + 1
      },
      () => {
        console.log('Callback value', this.state.count)
      }
    )
    // console.log(this.state.count) //asynchron call, log after setCount
    // solved w. callback function as seconded parameter in setState function
  }


  render() {
    return (
      <div>
        <div>Counter: {this.state.count}</div>
        <button onClick={() => this.increment()}>Increase by 1</button>
      </div>
    )
  }
}

export default CCounter

