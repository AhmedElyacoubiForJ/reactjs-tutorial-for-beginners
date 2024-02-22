import React from 'react'

// rfce
function Columns() {
  return (
    // <div> error in console
    //     <td>Name</td>
    //     <td>El Yacoubi</td>
    // </div>
    
    // here we can work w. key attribute
    // <React.Fragment>
    //     <td>Name</td>
    //     <td>El Yacoubi</td>
    // </React.Fragment>

    // the only disadvantage we can not pass a key attribute to the empty fragment if needed
    <>
        <td>Name</td>
        <td>El Yacoubi</td>
    </>
  )
}

export default Columns