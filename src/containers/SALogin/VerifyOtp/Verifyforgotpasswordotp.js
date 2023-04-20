import React, { useState, useRef, useEffect } from 'react'
import '../../../css/main.css'
import '../../../css/normalize.css'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import InvalidCode from '../../../component/Validations/InvalidCode';
import companyLogo from '../../../img/temp/principal-logo.png';
import { Link } from "react-router-dom";
import Timer from '../../../component/Timer/Timer';
import Toomanyattempt from '../../../component/Validations/Toomanyattempt';
import InvalidError from '../../../component/Validations/Invaliderror';
import axios from 'axios';
import { Alert } from '@mui/material';


function VerifyforgotpasswordOtp() {


    const [seconds, setSeconds] = useState(60);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (seconds > 0) {
            const interval = setInterval(() => {
                const remaining = seconds - 1;
                const progressValue = ((60 - remaining) / 60) * 100;
                setSeconds(remaining);
                setProgress(progressValue);
            }, 1000);
            return () => clearInterval(interval);
        }

    }, [seconds]);

    const inputRefs = useRef([]);
    const navigate = useNavigate();
    const [codeerror, setCodeerror] = useState(false);
    const auth = useSelector((state) => { return state.auth });
    const [activeIndex, setActiveIndex] = useState(0)
    const [attemptmin, setAttemptmin] = useState("")
    const [attempt, setAttempt] = useState(false)
    const [invalidmsg, setInvalidmsg] = useState("")
    const [invalid, setInvalid] = useState(false)

    const [state, setState] = useState({
        number1: "",
        number2: "",
        number3: "",
        number4: "",
        number5: "",
        number6: "",
    });

    const handleInputChange = (v) => {
        let { name, value } = v.target;
        setState({ ...state, [name]: value });
        console.log(state)
        otpcheck(value)
        setCodeerror(false)
    }

    //Validate OTP textfields
    function otpcheck(value) {
        if (value.length === 1) {
            if (activeIndex < 5)
                setActiveIndex(activeIndex + 1)
        }
        else if (value.length > 1) {
            const fieldname = {
                number1: "",
                number2: "",
                number3: "",
                number4: "",
                number5: "",
                number6: "",
            };
            const arr = value.split("")
            for (let i = 1; i <= arr.length; i++) {
                fieldname[`number${i}`] = arr[i - 1]
            }
            setActiveIndex(arr.length - 1)
            setState(fieldname)
        }
    }
    useEffect(() => {
        inputRefs.current[activeIndex].focus()
    }, [activeIndex])

    const handleKeyDown = (e) => {
        if (e.keyCode === 8 && activeIndex < 6 && activeIndex > 0)  // 8 is keycode for backspace
        {
            setActiveIndex(activeIndex - 1) // Move the focus to the previous input field
            console.log(activeIndex)
        }

        if (e.key === 'e') {
            e.preventDefault();
        }
    }

    const verifyotp = (username, code) => {
        let uri = '/api/v1/sa/forgotpassword/verifyotp?username=' + username + '&otp=' + code;
        console.log(uri)
        axios.get(uri)
            .then((resp) => {
                console.log("Inside verifyotp action " + resp.data)
                setCodeerror(false);
                if (resp.data) {
                    window.localStorage.setItem("code", JSON.stringify({
                        code,
                    }));
                    navigate("/sa/forgotpassword/resetpassword");
                }
                else
                    setCodeerror(true);
            }).catch((error) => navigate("/sa/login"))

    }

    const generateotp = (username) => {
        let uri = '/api/v1/sa/forgotpassword/otp?username=' + username;
        console.log(uri)
        
        axios.get(uri)
            .then((resp) => {
                console.log("Check Error message ::" + resp.data.errorMessage)
                if (resp.data.errorMessage) {
                    if (resp.data.codeNumber === "0034") {
                        setAttempt(true)
                        setAttemptmin(resp.data.info)
                        setInvalid(false)
                    } else if (resp.data.codeNumber === "0024") {
                        setInvalid(true)
                        setInvalidmsg(resp.data.message)
                        console.log(resp.data.message)
                    }
                } else {
                    setAttempt(false)
                    setInvalid(false)
                    setSeconds(60);
                    console.log("Inside generate otp " + resp.data.message)
                }
            }).catch((error) => console.log('OTP generation failed' + error))
    }

    const handleClick = (e) => {
        e.preventDefault();
        setCodeerror(false)
        if (!state.number1 || !state.number2 || !state.number3 ||
            !state.number4 || !state.number5 || !state.number6) {
            setInvalid(true)
            setInvalidmsg("Invalid code entered")
        } else {
            setInvalid(false)
            let code = state.number1 + state.number2 + state.number3 + state.number4 + state.number5 + state.number6;
            console.log("code: " + code)
            const username = JSON.parse(window.localStorage.getItem("username"));
            verifyotp(username, code)
        }
    }
    const handleResendotp = (e) => {
        e.preventDefault();
        const username = JSON.parse(window.localStorage.getItem("username"));
        setCodeerror(false)
        generateotp(username)
    }

    return (

        <div >
            <div className="login-case-heading">
                <h1 className="heading">Verify It's You</h1>
                <h6 className="sub-heading">Check your registered email for OTP Code</h6>

                <div className="spacer10"></div>
                {/* { codeerror && <InvalidError errormessage="Invalid code entered" icon="icn-invalid" />} */}
                {/* { codeerror && <Alert severity="error">Invalid code entered!</Alert>} */}
                {invalid && <InvalidError errormessage={invalidmsg} icon="icn-invalid" />}
                {attempt && <Toomanyattempt firstmsg="Too many resend attempts!" secondmsg="Please try again after " time={attemptmin} />}

            </div>
            <ul className="form-field-list login-case-fields">
                {/* <li>
                    <div className="flex-table">
                        <aside className="flex-item-20"><div className={`anim-input ${invalid && 'anim-input-error'}`}><input type="number" name="number1" onChange={handleInputChange} key={0} autocomplete="off" placeholder=" " className="text-otp text-center" maxlength="6" ref={(ref) => (inputRefs.current[0] = ref)} disabled={seconds === 0} value={state.number1} onKeyDown={handleKeyDown} /></div></aside>
                        <aside className="flex-item-20"><div className={`anim-input ${invalid && 'anim-input-error'}`}><input type="number" name="number2" onChange={handleInputChange} key={1} autocomplete="off" placeholder=" " className="text-otp text-center" maxlength="1" ref={(ref) => (inputRefs.current[1] = ref)} disabled={seconds === 0} value={state.number2} onKeyDown={handleKeyDown} /></div></aside>
                        <aside className="flex-item-20"><div className={`anim-input ${invalid && 'anim-input-error'}`}><input type="number" name="number3" onChange={handleInputChange} key={2} autocomplete="off" placeholder=" " className="text-otp text-center" maxlength="1" ref={(ref) => (inputRefs.current[2] = ref)} disabled={seconds === 0} value={state.number3} onKeyDown={handleKeyDown} /></div></aside>
                        <aside className="flex-item-20"><div className={`anim-input ${invalid && 'anim-input-error'}`}><input type="number" name="number4" onChange={handleInputChange} key={3} autocomplete="off" placeholder=" " className="text-otp text-center" maxlength="1" ref={(ref) => (inputRefs.current[3] = ref)} disabled={seconds === 0} value={state.number4} onKeyDown={handleKeyDown} /></div></aside>
                        <aside className="flex-item-20"><div className={`anim-input ${invalid && 'anim-input-error'}`}><input type="number" name="number5" onChange={handleInputChange} key={4} autocomplete="off" placeholder=" " className="text-otp text-center" maxlength="1" ref={(ref) => (inputRefs.current[4] = ref)} disabled={seconds === 0} value={state.number5} onKeyDown={handleKeyDown} /></div></aside>
                        <aside className="flex-item-20"><div className={`anim-input ${invalid && 'anim-input-error'}`}><input type="number" name="number6" onChange={handleInputChange} key={5} autocomplete="off" placeholder=" " className="text-otp text-center" maxlength="1" ref={(ref) => (inputRefs.current[5] = ref)} disabled={seconds === 0} value={state.number6} onKeyDown={handleKeyDown} /></div></aside>
                    </div>
                </li> */}
                <li>
                    <div className="flex-table">
                        {[...Array(6)].map((_, index) => (
                            <aside className="flex-item-20" key={index}>
                                <div className={`anim-input ${invalid && 'anim-input-error'}`}>
                                    <input
                                        type="number"
                                        name={`number${index + 1}`}
                                        onChange={handleInputChange}
                                        autoComplete="off"
                                        placeholder=" "
                                        className="text-otp text-center"
                                        maxLength="1"
                                        ref={ref => inputRefs.current[index] = ref}
                                        disabled={seconds === 0}
                                        value={state[`number${index + 1}`]}
                                        onKeyDown={handleKeyDown}
                                    />
                                </div>
                         </aside>
                      ))}
                  </div>
              </li>
                <li>
                    <div className="form-group">
                        {seconds === 0 ? <button type="button" className="btn btn-secondry btn-block link-load-case" disabled>Verify &amp; Set Password</button> :
                            <button type="button" className="btn btn-primary btn-block" onClick={handleClick} >Verify &amp; Set Password</button>}
                    </div>
                </li>
                <li>
                    <div className="flex-table align-items-center">
                        <Link to="/sa/forgotpassword">Change Username</Link>
                        {seconds === 0 ? <Link component="button" variant="body2" onClick={handleResendotp}>Resend Otp</Link>
                            : <Timer seconds={seconds} progress={progress} />}
                        {/* <aside id="counterContent2Fa">
                                                                <div className="chart-donut-group">
                                                                    <div className="chart-donut" ></div>
                                                                    <div className="chart-donut-label" id="otpCounter">100</div>
                                                                </div>
                                                            </aside> */}
                    </div>
                </li>
            </ul>
        </div>


    )
}

export default VerifyforgotpasswordOtp
