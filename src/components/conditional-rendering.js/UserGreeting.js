import React, { Component } from 'react'

// rce snippets
class UserGreeting extends Component {
    // rconst snippets
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    // if/else can only outside the JSX
    render() {
        // first approach
        // if (this.state.isLoggedIn) {
        //     return <div>Welcome El Yacoubi</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }

        // second approach
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome El Yacoubi</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        // third approach is ternary operator
        // has the advantage that can be used within the JSX
        // and is the best one
        // return (
        //     this.state.isLoggedIn ? (
        //         <div>Welcome El Yacoubi</div>
        //     ) : (
        //         <div>Welcome Guest</div>
        //     )
        // )

        // fourth approach
        // if we want to render something or nothing
        return this.state.isLoggedIn && <div>Welcome El Yacoubi</div>
    }
}

export default UserGreeting
