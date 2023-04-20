import React , {  useState } from 'react'
import '../../css/main.css'
import '../../css/normalize.css'
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
// import Alert from '@mui/material/Alert';
import Invalidemail from '../../component/Validations/Invalidtextfield';
import InvalidError from '../../component/Validations/Invaliderror';
import Captcha from 'demos-react-captcha';

function ForgotPassword() {

  const [capcha, setCapcha] = useState(false);
  const [capchamsg, setCapchamsg] = useState(false);
  const [icon, setIcon] = useState("")
  const navigate = useNavigate()
  const [state, setState] = useState({
    username: "",
});

 const [errors, setErrors] = useState("")
 const [error, setError] = useState(false)
 const emailregex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

 const onChangeCaptcha = (value) =>{
  console.log(value);
  setCapcha(value);
}

const handleInputChange = (v) =>{
  let {name, value} = v.target;
  setState({...state, [name]:value});
}

const generateotp = (username) => {
  let uri = '/api/v1/sa/forgotpassword/otp?username='+username;
  console.log(uri)
  
  axios.get(uri)
      .then((resp) => {
        console.log("Check Error message ::"+resp.data.errorMessage)
                if (resp.data.errorMessage) {
                 if( resp.data.codeNumber === "0036"){
                        setError(true)
                        setErrors(resp.data.message)
                    }
                } else {
                     setError(false)
                    console.log("Inside generate otp "+resp.data)
                    window.localStorage.setItem('username', JSON.stringify(state.username));
                    navigate("/sa/forgotpassword/verifyotp")
                }
      }).catch((error) => { 
        setError(true)
        setErrors("OTP generation failed!")
      })
  
}

const handleSubmit = (e) =>{
  e.preventDefault();
  
  console.log(state.username)
  if(!state.username || !emailregex.test(state.username)){
    setError(true)
    setErrors("Invalid email.")
 }else if(capcha == false){
  setCapchamsg("Inavalid Captch!!")
  setIcon("icn-invalid")
}else{
    setError(false)
    generateotp(state.username) 
    
 }
}

function SubmitButton(){
  if (state.username){
    return   <button type="button" className="btn btn-primary btn-block  link-load-case" onClick={handleSubmit} >Send OTP Code</button> 
  } else{
    return  <button type="button" className="btn btn-secondary btn-block link-load-case"  disabled>Send OTP Code</button> 
  }
}

  return (
    <div >
    <div className="login-case-heading">
      <h1 className="heading">Forgot Password</h1>
      <h6 className="sub-heading">Enter registered email to get OTP Code</h6>
      
    </div>
    <ul className="form-field-list login-case-fields">
      
      <li>
      { !capcha && <InvalidError errormessage={capchamsg} icon={icon} />}
        {/* <TooManyAttempt firstmsg="Our system is feeling a little down" 
                                    secondmsg="Please try again in few moments."
                                     time=""/> */}
        {/* { error && <Alert severity="error">{errors}</Alert>} */}
      </li>
      
      <li>
        <div className={`anim-input ${error && 'anim-input-error'}`}>
          <input type="text" name="username" autoComplete="off" placeholder=" " onChange={handleInputChange} />
          <label className="anim-label">Email*</label>
        </div>
        {error && <Invalidemail error={errors} /> }
      </li>
      <li> <Captcha onChange={onChangeCaptcha} placeholder="Enter captcha" /> </li>
      <li>
        <div className="form-group">
        <SubmitButton /> 
          {/* <button type="button" className="btn btn-primary btn-block  link-load-case" onClick={handleSubmit} >Send OTP Code</button> */}
        </div>
      </li>
      <li>
        <Link to='/sa/login'>Back to Sign In</Link>
      </li>
    </ul>
  </div>
  )
}

export default ForgotPassword
