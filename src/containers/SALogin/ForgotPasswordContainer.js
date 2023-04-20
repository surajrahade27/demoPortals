import React  from 'react'
import '../../css/main.css'
import '../../css/normalize.css'
import companyLogo from '../../img/upsidelms-logo.svg';
import ForgotPassword from './ForgotPassword';
import { useLocation } from 'react-router'; 
import VerifyforgotpasswordOtp from './VerifyOtp/Verifyforgotpasswordotp'; 
import Resetpassword from './Resetpassword';
import ComplanyLogo from '../../component/Logo/ComplanyLogo';

function ForgotPasswordContainer() {
    const location = useLocation();
    console.log(location.pathname)
    const getExactForgotPassordComponent = () => {
        switch (location.pathname) {
            case "/sa/forgotpassword/verifyotp": return <VerifyforgotpasswordOtp />
            case "/sa/forgotpassword/resetpassword": return <Resetpassword />
            case "/sa/forgotpassword": return <ForgotPassword />
        }
    }

    return (
        <div id="root">
            <div className="app">
                <div className="container-fluid no-gutters no-padding">
                    <div className="row no-gutters loginRow">
                        <div className="col-12 col-md-6 col-lg-5 login-area">
                            <div className="row no-gutters justify-content-center full-height">

                                <div classNamee="col-12 col-md-10 col-lg-7 login-content">
                                    {/* <div className="login-logo">
                                        <img src={companyLogo} className="login-logo-media" alt='' /></div> */}
                                    <ComplanyLogo logo={companyLogo} />
                                    <div className="login-field-set">
                                        <div className="login-case-set">
                                        {getExactForgotPassordComponent()}
                                            {/* <ForgotPassword /> */}

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



export default ForgotPasswordContainer
