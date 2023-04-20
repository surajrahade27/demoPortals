import React from 'react'
import '../../css/main.css'
import '../../css/normalize.css'
import SALoginSlice from './SALoginSlice';

export default function SALogin() {

	return (

		<div id="root">
			<div className="app">
				<div className="container-fluid no-gutters no-padding">
					<div className="row no-gutters loginRow">
						<div className="col-12 col-md-6 col-lg-5 login-area">
							<div className="row no-gutters justify-content-center full-height">
								<SALoginSlice />

							</div>
						</div>
						<div className="col-12 col-md-6 col-lg-7 login-media"></div>
					</div>
				</div>
			</div>
		</div>

	)
}
