import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

// rce
class LifecycleA extends Component {
    // rconst
    constructor(props) {
        super(props)

        this.state = {
            name: 'Ahmed'
        }
        console.log('LifecycleA constructor call')
    }

    static getDerivedStateFromProps(props, state) {
        // clg
        console.log('LifecycleA getDerivedStateFromProps method call')
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount method call')
    }
    
    render() {
        console.log('LifecycleA render method call')
        return (
            <div>
                <div>Lifecycle A</div>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA