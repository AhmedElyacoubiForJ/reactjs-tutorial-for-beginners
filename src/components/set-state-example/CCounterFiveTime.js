// rce snippets
import React, { Component } from 'react'

class CCounterFiveTime extends Component {
  // rconst snippets
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  // for more than one call we use prevState instead of state object
  increment() {
    this.setState( (prevState, props) => ({
      count: prevState.count + 1 // or. props.inputValue
    }),
    () => {
           console.log('Callback value', this.state.count)
       }
    )
  }

  // react take calls to one for better perfomance
  // so we must modify the increment function using prevState object
  incrementFiveTime() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }

  render() {
    return (
      <div>
        <div>Counter: {this.state.count}</div>
        <button onClick={() => this.incrementFiveTime()}>Increase by 5</button>
      </div>
    )
  }
}

export default CCounterFiveTime

