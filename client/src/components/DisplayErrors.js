import React from 'react'


function DisplayErrors({error}) {
  return (
    <div>
        <p className="error-msg">* {error}  *</p>
    </div>
  )
}

export default DisplayErrors