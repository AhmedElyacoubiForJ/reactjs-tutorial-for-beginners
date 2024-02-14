import React, { Component } from 'react'


class WelcomeWithProps extends Component {
    render() {
        return <h1>Hello {this.props.abbreviation}  {this.props.profession} from react class component w. props</h1>
    }
}

export default WelcomeWithProps;