import React, { Component, PureComponent } from 'react'
import RegularComponent from './RegularComponent';
import MyPureComponent from './MyPureComponent';

// rce
// no props value changed component will only 1 time rerendered sc comparison
class ParentComponentDemo extends PureComponent {
// also if no changes component will rendered each 2 s
//class ParentComponentDemo extends Component {
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