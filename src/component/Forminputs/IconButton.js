import React from 'react'

export default function IconButton(props) {
  return (
    <button type={props.type} className={props.btnclass}>
        <div className={props.iconclass}></div>
        <span>{props.label}</span>
    </button>
  )
}
