import React from 'react'

// rfce snippets
function ComponentFunctionClick() {
  function clickHandler() {
    console.log('Button Clicked')
  }

  return (
    <div>
        {/*
        keep in mind event handler is a function and not a function call
        <button onClick={clickHandler()}>Click</button>
        */}
        
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default ComponentFunctionClick
