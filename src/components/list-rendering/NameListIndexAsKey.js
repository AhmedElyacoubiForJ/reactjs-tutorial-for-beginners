import React from 'react'

function NameListIndexAsKey() {
    const names = ['Ahmed', 'Marcus', 'Thomas', 'Ahmed']
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)

    return (
        < div >{nameList}</div >
    )
}

export default NameListIndexAsKey
