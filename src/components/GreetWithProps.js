import React from 'react'


const GreetWithProps = (props) => {
    // console.log(props.profession);
    return (
        <div>
            <h1>Hello { props.abbreviation } { props.profession } from react function component</h1>
            { props.children }
        </div>
    )
}

export default GreetWithProps