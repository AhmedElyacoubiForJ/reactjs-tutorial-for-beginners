import React, { Component } from 'react'

// rce
class LifecycleB extends Component {
    // rconst
    constructor(props) {
        super(props)

        this.state = {
            name: 'Ahmed'
        }
        console.log('LifecycleB constructor call')
    }

    static getDerivedStateFromProps(props, state) {
        // clg
        console.log('LifecycleB getDerivedStateFromProps method call')
        return null
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount method call')
    }

     // scu
     shouldComponentUpdate(nextProps, nextState) {
        console.log('LifecycleB shouldComponentUpdate method call')
        return true
    }

    // gsb
    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        console.log('LifecycleB getSnapshotBeforeUpdate method call')
        return null
    }

    // cdu
    componentDidUpdate(prevProps, prevState) {
        console.log('LifecycleB componentDidUpdate method call')
    }

    render() {
        console.log('LifecycleB render method call')
        return <div>Lifecycle B</div>
    }
}

export default LifecycleB