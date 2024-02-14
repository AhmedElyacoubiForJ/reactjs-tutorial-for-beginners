import React, { Component } from 'react'


class CWelcomePropsDestructed extends Component {
    render() {
        // extracting only the necessary props that will be used by the component tag
        const {abbreviation, profession} = this.props
        // const {state1, state2} = this.state // if state is defined
        return <h1>Hello {abbreviation}  {profession} from react class component w. destructed props</h1>
    }
}

export default CWelcomePropsDestructed;