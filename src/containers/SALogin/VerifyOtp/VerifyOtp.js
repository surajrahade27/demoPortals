import React from 'react'
import VerifyCode from './VerifyCode'
import '../../../css/main.css'
import '../../../css/normalize.css'
import companyLogo from '../../../img/temp/principal-logo.png';

function VerifyOtp() {
  return (
    <div classNamee="col-12 col-md-10 col-lg-7 login-content">
      <div className="login-logo">
        <img src={companyLogo} className="login-logo-media" alt='' /></div>
      <div className="login-field-set">
        <div className="login-case-set">
          <VerifyCode />

        </div>

      </div>
    </div>
  )
}

export default VerifyOtp;
