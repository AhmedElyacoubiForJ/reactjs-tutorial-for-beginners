import React, { Component } from 'react'

// rce
class RegularComponent extends Component {
    render() {
        // clg
        console.log('Regular Component render method')
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default RegularComponent