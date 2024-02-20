import React from 'react'

const heading = {
    fontSize: '72px',
    color: 'blue'
}

// rfce
function InlineStyling() {
  return (
    <div>
      <h1 className='error'>Error</h1>
      {/* dosen't compile
      <h1 className={styles.success}>success</h1>
      */}
      <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default InlineStyling
