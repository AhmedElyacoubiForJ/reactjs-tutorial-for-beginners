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

    // scu
    shouldComponentUpdate(nextProps, nextState) {
        console.log('LifecycleA shouldComponentUpdate method call')
        return true
    }

    // gsb
    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        console.log('LifecycleA getSnapshotBeforeUpdate method call')
        return null
    }

    // cdu
    componentDidUpdate(prevProps, prevState) {
        console.log('LifecycleA componentDidUpdate method call')
    } 

    // as a class property
    changeState = () => {
        this.setState({
            name: 'Codeevolution'
        })
    }

    render() {
        console.log('LifecycleA render method call')
        return (
            <div>
                <div>Lifecycle A</div>
                <button onClick={this.changeState}>Change state</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA