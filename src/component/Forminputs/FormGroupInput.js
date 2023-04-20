import React from 'react'

export default function FormGroupInput(props) {
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <div className="input-group">
                <input type={props.type} name={props.name} className="form-control" id={props.name} />
            </div>
        </div>
    )
}
