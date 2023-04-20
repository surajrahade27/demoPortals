import React from 'react'

function Button(props) {
  return (
    <button type={props.type} className={props.btnclass} data-case={props.case} onClick={props.onClick} disabled={props.disabled}>{props.label}</button>
  )
}

export default Button