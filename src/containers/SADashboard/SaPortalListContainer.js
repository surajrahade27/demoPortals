import React from 'react'
import '../../css/main.css'
import '../../css/normalize.css'
import PortalList from './PortalList';
import BreadCrumbs from '../../component/BreadCrum/BreadCrumbs';

export default function PortalListContainer() {

    return (
        <main className="layout-page">
            <div className="container">
                <BreadCrumbs />
                <PortalList />
            </div>
        </main>
    )
}
