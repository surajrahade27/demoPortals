import React from 'react'

function Password(props) {
    return (
        <div className="anim-input anim-input-append-group">
            <input type="password" name={props.name} autocomplete="off" placeholder=" " onChange={props.onChange}/>
            <label className="anim-label">{props.label}</label>
            <div className="anim-input-append hasTooltip">
                <button type="button" className="btn btn-icon btn-text lnkTogglePassword" onClick={props.onClick}>
                    <div className="icon-link icn-eye-1"></div>
                </button>
                <div className="tooltip">Show Password</div>
            </div>
        </div>
    )
}

export default Password
