import React from 'react'

// props vs. state

// props get passed to the component
// Function paramaters
// props are immutable
// In Functional Components props can be accessed using props
// In Class Components props can be accessed using this.props
// vs.
// state is managed within the component
// Variables declared in the function body
// state can be changed
// In Functional Components state can be accessed using - useState Hook
// In Class Components - this.state
const GreetWithProps = (props) => {
    // console.log(props.profession);
    // props.profession = 'Unknown' not possible
    return (
        <div>
            <h1>Hello { props.abbreviation } { props.profession } from react function component</h1>
            { props.children }
        </div>
    )
}

export default GreetWithProps