import React from 'react';
import {  Routes , Route} from 'react-router-dom';
import Login from './containers/Login/Login'
import MainApp from    './MainApp'
import { ToastContainer } from 'react-toastify';
import SAMainRoute from './SAMainRoute';
// import SALoginContainer from './containers/SALogin/SALoginContainer'
// import  VerifyOtpContainer from './containers/SALogin/VerifyOtp/VerifyOtpContainer'
// import ForgotPasswordContainer from './containers/SALogin/ForgotPasswordContainer'
// import Resetpassword from './containers/SALogin/Resetpassword';
// import VerifyforgotpasswordOtp from './containers/SALogin/VerifyOtp/Verifyforgotpasswordotp'
// import ResetpasswordContainer from './containers/SALogin/ResetpasswordContainer'



function LMSRoutes() {
  return (
    <div className='app'>
     <Routes>
        <Route exact path='/' element={<Login />}></Route>
        <Route exact path='/sa/*' element={<SAMainRoute />}></Route>
        {/* <Route exact path='/sa/login' element={<SALoginContainer />}></Route>
        <Route exact path='/sa/verifyotp' element={<VerifyOtpContainer />} ></Route>
        <Route exact path='/sa/forgotpassword' element={<ForgotPasswordContainer />} ></Route>
        <Route exact path='/sa/forgotpassword/verifyotp' element={<VerifyforgotpasswordOtp />} ></Route>
        <Route exact path='/sa/forgotpassword/resetpassword' element={<ResetpasswordContainer />} ></Route> */}
        <Route exact path='/*' element={<MainApp />} ></Route>
      </Routes>
      <ToastContainer autoClose={3000} hideProgressBar></ToastContainer>
    </div>
  )
}

export default LMSRoutes;
