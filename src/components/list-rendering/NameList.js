import React from 'react'
import Person from './Person'

// rfce
function NameList() {
    const names = ['Ahmed', 'Marcus', 'Thomas']
    const nameList = names.map(name => <h2 key={name + 'Id'}>{name}</h2>)

    // take it from git tutorial 
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        }
    ]
    // better in seperate component
    // const personList = persons.map(person => (
    //     // <h2 key={person.id + 'Id'}>
    //     //     I am {person.name}. I am {person.age} years old. I know {person.skill}
    //     // </h2>
    // ))

    const personList = persons.map(person => <Person person={person} />)

    return (
        < div >
            {/*
            <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2>
            */}
            {
                // names.map(name => <h2 key={name + 'Id'}>{name}</h2>)
                // nameList
                personList
            }
        </div >
    )
}

export default NameList
