import React from 'react';

export default function BreadCrumbs() {
    return <div className="row mt-4 mb-4">
        <div className="col-12">
            <ul className="breadcrumb" style={{margin: "0px"}}>
                <li className="breadcrumb-item">LMS</li>
                <li className="breadcrumb-item"><a href="#">List Portals</a></li>
            </ul>
        </div>
    </div>;
}
