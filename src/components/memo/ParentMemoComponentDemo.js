import React, { Component} from 'react';
import MemoComponent from './MemoComponent';

// rce
class ParentMemoComponentDemo extends Component {
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
                <MemoComponent name={this.state.name}/>
            </div>
        )
    }
}

export default ParentMemoComponentDemo