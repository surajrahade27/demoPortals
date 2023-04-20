import React from 'react'
import '../../css/main.css'
import '../../css/normalize.css'
import companyLogo from '../../img/temp/principal-logo.png';
import Resetpassword from './Resetpassword';

function ResetpasswordContainer() {
  return (
    <div id="root">
            <div className="app">
                <div className="container-fluid no-gutters no-padding">
                    <div className="row no-gutters loginRow">
                        <div className="col-12 col-md-6 col-lg-5 login-area">
                            <div className="row no-gutters justify-content-center full-height">

                                <div classNamee="col-12 col-md-10 col-lg-7 login-content">
                                    <div className="login-logo">
                                        <img src={companyLogo} className="login-logo-media" alt='' /></div>
                                    <div className="login-field-set">
                                        <div className="login-case-set">
                                            <Resetpassword />

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-7 login-media"></div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ResetpasswordContainer
