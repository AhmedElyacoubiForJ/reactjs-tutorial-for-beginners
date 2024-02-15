import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

// rce snippets
class ParentComponent extends Component {
    // rconst snippets
    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        // alert('Hello'.concat(this.state.parentName))
        // instead of string concatination
        // we use template literals ES6
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render() {
        return <div><ChildComponent greetHandler={this.greetParent} /></div>
    }
}

export default ParentComponent
