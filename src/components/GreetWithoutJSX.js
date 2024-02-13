import React from 'react'

// JSX differences
// reserved key words
// class -> className (css)
// for -> htmlFor
// camelCasine property naminf convention
// onclick -> onClick
// tabindex -> tabIndex
const GreetWithoutJSX = () => {
    return React.createElement(
        'div',
        {id: 'greet', className: 'dummyClass'}, // key: value
        React.createElement(
            'h1',
            null,
            'Hello Developer from react without JSX function component'
        )
    )
}

export default GreetWithoutJSX