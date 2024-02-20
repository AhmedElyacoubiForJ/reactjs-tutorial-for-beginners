import React, { Component } from 'react'

// rce
class Form extends Component {
    // rconst
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'react'
        }
    }
    // handler method as a class property
    // and it will be equal to arrow function
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

    handleCommentsChange = (event) => {
        this.setState(
            {
                comments: event.target.value
            },
            // callback
            () => {
                console.log(this.state.comments)
            })
    }

    handleTopicChange = (event) => {
        this.setState(
            {
                topic: event.target.value
            },
            // callback
            () => {
                console.log(this.state.topic)
            })
    }

    handelSubmit = event => {
       alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
       event.preventDefault()
    }

    render() {
        const { username, comments, topic } = this.state
        return (
            <form onSubmit={this.handelSubmit}>
                <div>
                    <label>Username</label>
                    <input
                        type='text'
                        value={username} // value={this.state.username}
                        onChange={this.handleUsernameChange}
                    />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea
                        value={comments} // value={this.state.comments}
                        onChange={this.handleCommentsChange}
                    />
                </div>
                <div>
                    <label>Topic</label>
                    <select
                        value={topic} // value={this.state.topic}
                        onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form