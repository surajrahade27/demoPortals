import React from 'react'
import {  Routes , Route} from 'react-router-dom';
import SALoginContainer from './containers/SALogin/SALoginContainer'
import  VerifyOtpContainer from './containers/SALogin/VerifyOtp/VerifyOtpContainer'
import ForgotPasswordContainer from './containers/SALogin/ForgotPasswordContainer'
import SADashboardContainer from './containers/SADashboard/SADashBoardContainer';
// import VerifyforgotpasswordOtp from './containers/SALogin/VerifyOtp/Verifyforgotpasswordotp'
// import ResetpasswordContainer from './containers/SALogin/ResetpasswordContainer'

function SAMainRoute() {
  return (
    <div className='app'>
     <Routes>
        <Route exact path='/login' element={<SALoginContainer />}></Route>
        <Route exact path='/verifyotp' element={<VerifyOtpContainer />} ></Route>
        <Route exact path='/forgotpassword/*' element={<ForgotPasswordContainer />} ></Route>
        <Route exact path='/portal_list' element={<SADashboardContainer />} ></Route>

        
        {/* <Route exact path='/forgotpassword' element={<ForgotPasswordContainer />} ></Route> */}
        {/* <Route exact path='/forgotpassword/verifyotp' element={<VerifyforgotpasswordOtp />} ></Route>
        <Route exact path='/forgotpassword/resetpassword' element={<ResetpasswordContainer />} ></Route> */}
     </Routes>
    </div>
  )
}

export default SAMainRoute
