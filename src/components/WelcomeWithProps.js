import React, { Component } from 'react'


class Welcome extends Component {
    render() {
        return <h1>Hello {this.props.abbreviation}  {this.props.profession} from react class component w. props</h1>
    }
}

export default Welcome;