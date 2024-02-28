import React from 'react'

// rfce
// What we achieved with pure component, i.e. performance.
// we can also achieve it with memo in functional component
// and so this component will be renderer only if the prop
// will be changed
function MemoComponent({name}) {
    console.log("Rendering Memo Component")
  return (
    <div>{name}</div>
  )
}

export default React.memo(MemoComponent)