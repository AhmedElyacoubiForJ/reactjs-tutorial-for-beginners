import React, { Component } from 'react'
import RegularComponent from './RegularComponent';
import MyPureComponent from './MyPureComponent';

// rce
class ParentComponentDemo extends Component {
    // rconst
    constructor(props) {
        super(props)

        this.state = {
            name: 'Ahmed'
        }
    }

    // cdm
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Ahmed'
            })
        }, 2000); // interval: 2s
    }

    render() {
        // clg
        console.log('###################Parent Component render method###################')
        return (
            <div>
                Parent Component
                <RegularComponent name={this.state.name}></RegularComponent>
                <MyPureComponent name={this.state.name}></MyPureComponent>
            </div>
        )
    }
}

export default ParentComponentDemo