import React from 'react'
import '../../css/main.css'
import '../../css/normalize.css'
import SAHeader from './Header';
import SaDashboardSidebar from './Aside';
import SaBottomBar from './bottomBar';
import $ from 'jquery';
import SANavBar from './SaNavBar';
import SessionTimeout from '../../component/SessionTime/session';
import PortalListContainer from './SaPortalListContainer';
export default function SADashboardContainer() {

    return (<div id="root" className='bg-theme-1'>
        <SessionTimeout />
        <div className="app">
            <SAHeader />
            <SANavBar />
            <PortalListContainer />
            <SaBottomBar />
        </div>
    </div>
    )
}


