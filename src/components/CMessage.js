import React, { Component } from 'react'

// How to change a state within class component (state privately maintained)
class CMessage extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    changeMessage() {
       this.setState({
            message: 'Thank you for subscribing'
       }) 
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default CMessage;