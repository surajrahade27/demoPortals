import React from 'react'
import IconButton from '../Forminputs/IconButton'

export default function NoRecordFound(props) {
    return (
        <div className="row text-center mt-5 mb-4">
            <div className="col-12 col-md-12 col-lg-12">
                <img src={props.img} height="120" className="mb-4" />
                <h4 className="mb-2">{props.heading}</h4>
                <p>{props.message}</p>
                <IconButton label="Create Portal" btnclass="btn btn-icon-label btn-primary mt-4" iconclass="icon-link icon-link-sm icn-add-small" type="button"/>
            </div>
        </div>
    )
}
