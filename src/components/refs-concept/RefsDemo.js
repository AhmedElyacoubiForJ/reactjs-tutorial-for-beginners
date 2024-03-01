import React, { Component } from 'react'

// rcc
export default class RefsDemo extends Component {
    // rconst
    constructor(props) {
        super(props)
        // first approch to make refs on elements
        this.inputRef = React.createRef()
        // second approach to make refs on elements using callback methods
        this.callBackRef = null
        this.setCallBackRef = element  => {
            this.callBackRef = element
        }
    }
    componentDidMount() {
        /* this.inputRef.current.focus()
        console.log(this.inputRef) */
        if (this.callBackRef) {
            this.callBackRef.focus()
        }
    }
    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <input type="text" ref ={this.inputRef}/>
                <input type="text" ref ={this.setCallBackRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}
