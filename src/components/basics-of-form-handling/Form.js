import React, { Component } from 'react'

// rce
class Form extends Component {
    // rconst
    constructor(props) {
        super(props)

        this.state = {
            username: ''
        }
    }
    // handler method as a class property
    // and is to be equal an arrow function
    handleUsernameChange = (event) => {
        this.setState(
            {
                username: event.target.value
            },
            // callback
            () => {
                console.log(this.state.username)
            })
    }

    render() {
        return (
            <form>
                <div>
                    <label>Username</label>
                    <input
                        type='text'
                        value={this.state.username}
                        onChange={this.handleUsernameChange}
                    />
                </div>
            </form>
        )
    }
}

export default Form