import React from 'react'

// rfe snippets
function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
            {/* through the Arrow function we can pass paremeters to the Parent method */}
            <button onClick={() => props.greetHandler('Child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent