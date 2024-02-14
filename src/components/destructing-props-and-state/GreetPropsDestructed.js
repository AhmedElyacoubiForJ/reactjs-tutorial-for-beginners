import React from 'react'

// first way
// const GreetPropsDestructed = ({ name, heroName }) => {
//     return (
//         <div>
//             <h1>
//                 Hello {name} a.k.a {heroName}
//             </h1>
//         </div>
//     )
// }

// second way
const GreetPropsDestructed = (props) => {
    const { name, heroName } = props
    return (
        <div>
            <h1>
                Hello {name} a.k.a {heroName}
            </h1>
        </div>
    )
}

export default GreetPropsDestructed
