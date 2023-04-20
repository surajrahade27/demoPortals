import React from 'react'
import '../../css/main.css'
import '../../css/normalize.css'
import companyLogo from '../../img/upsidelms-logo.svg';
export default function SAHeader() {
    return (<header className="app-header">
        <a href="#" className="icon-link icn-menu-1 link-navbar" title="Menu"></a>
        <a href="#" className="app-brand-logo">
            <img src={companyLogo} className="login-logo-media" alt='' />
        </a>
        <div className="app-header-menu">
            {/* <a href="#" className="icon-link icn-cart hasTooltip"><span className="badge-count">5</span><div className="tooltip below">View Cart</div></a>
            <a href="#" className="icon-link icn-search hasTooltip"><div className="tooltip below">Global Search</div></a>
            <a href="#" className="icon-link icn-bell hasTooltip"><span className="app-header-highlight"></span><div className="tooltip below">Updates</div></a> */}

        </div>

        <div className="navbar-search">
            <div className="navbar-search-header">
                <div className="navbar-search-field"><input type="text" placeholder="Type and hit enter to search..." /></div>
                <a href="#" className="icon-link icn-search"></a>
                <a href="#" className="icon-link icn-cross"></a>
            </div>
            <div className="navbar-search-results">

            </div>
        </div>
    </header>)

}