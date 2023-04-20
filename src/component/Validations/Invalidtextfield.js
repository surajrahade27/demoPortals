import React from 'react'

export default function Invalidemail({error}) {
  return (
    <div>
      <p className="form-field-message error">{error}</p>
    </div>
  )
}
