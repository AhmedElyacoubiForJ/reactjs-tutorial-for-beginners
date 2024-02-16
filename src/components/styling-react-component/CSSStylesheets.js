import React from 'react'
import './myStyles.css'

// rfce
function CSSStylesheets(props) {
  let className = props.primary ? 'primary' : ''
  return (
    <div>
      {/* <h1 className={className}>Stylesheets</h1> */}
      <h1 className={`${className} font-xl`}>Stylesheets</h1>
    </div>
  )
}

export default CSSStylesheets
