import React, { Component } from 'react'

// rcc
export default class RefsDemo extends Component {
    // rconst
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    render() {
        return (
            <div>
                <input type="text" ref ={this.inputRef}/>
            </div>
        )
    }
}
