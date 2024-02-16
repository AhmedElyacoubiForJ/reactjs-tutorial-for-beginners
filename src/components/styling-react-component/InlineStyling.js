import React from 'react'

const heading = {
    fontSize: '72px',
    color: 'blue'
}

// rfce
function InlineStyling() {
  return (
    <div>
      <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default InlineStyling
