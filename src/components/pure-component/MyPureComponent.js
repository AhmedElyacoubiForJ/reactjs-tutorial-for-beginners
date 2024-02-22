import React, { PureComponent } from 'react'

// rpce
class MyPureComponent extends PureComponent {
  render() {
    // clg
    console.log('Pure Component render method')
    return (
      <div>
        Pure Component {this.props.name}
      </div>
    )
  }
}

export default MyPureComponent