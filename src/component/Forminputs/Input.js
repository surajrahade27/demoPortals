import React from 'react'

function Input(props) {
    return (
        <div className="anim-input">
            <input type={props.type} id={props.name} name={props.name} autocomplete="off" placeholder=" " onChange={props.onChange}/>
            <label className="anim-label">{props.label}</label>
        </div>
    )
}

export default Input
