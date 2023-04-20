import React from 'react'
import '../../../css/main.css'
import '../../../css/normalize.css'
import VerifyOtp from  './VerifyOtp'

function VerifyOtpContainer() {
  return (
    <div id="root">
	 <div className="app">
		<div className="container-fluid no-gutters no-padding">
			<div className="row no-gutters loginRow">
				<div className="col-12 col-md-6 col-lg-5 login-area">
					<div className="row no-gutters justify-content-center full-height">
					<VerifyOtp />	
						
					</div>
				</div>
				<div className="col-12 col-md-6 col-lg-7 login-media"></div>
			</div>
		</div>
	</div>
</div>
  )
}

export default VerifyOtpContainer
