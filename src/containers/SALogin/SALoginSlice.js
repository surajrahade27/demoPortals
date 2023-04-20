import React, { useEffect, useState, useRef } from 'react'
import '../../css/main.css'
import '../../css/normalize.css'
import companyLogo from '../../img/upsidelms-logo.svg';
import $ from 'jquery';
import Captcha from 'demos-react-captcha';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { loginInitiate, userlogout } from '../../redux/Login/actions';
import Loader from '../../component/Loader/Loader';
import InvalidError from '../../component/Validations/Invaliderror';
import Toomanyattempt from '../../component/Validations/Toomanyattempt';
import axios from 'axios';
import { Link } from "react-router-dom";
import ComplanyLogo from '../../component/Logo/ComplanyLogo';


function SALoginSlice() {

    const [state, setState] = useState({
        username: "",
        password: "",
    });

    const inputRef = useRef();
	const navigate = useNavigate();
    const dispatch = useDispatch();
    const [capcha, setCapcha] = useState(false);
    const [errors, setErrors] = useState("");
    const [error, setError] = useState(false);
    const [icon, setIcon] = useState("")
    const auth = useSelector((state) => { return  state.auth } );
    const [attempt, setAttempt] = useState(false)

    const onChangeCaptcha= (value) =>{
        console.log(value);
        setCapcha(value);
      }

      useEffect(() => {            
        setError(false)
        inputRef.current.focus();
      }, []);


    const handleInputChange = (v) =>{
        setError(false)
        let {name, value} = v.target;
        setState({...state, [name]:value});
    }

    const handlePassword = () => {
		$(function(){
			$('body').on('click', '.lnkTogglePassword',function(){
			var parent = $(this).closest('.anim-input');
			if($(this).find('.icon-link').hasClass('icn-eye-1')){
				$(this).find('.icon-link').removeClass('icn-eye-1').addClass('icn-eye-2');
				parent.find('input[type="password"]').attr('type','text');
				parent.find('.tooltip').text('Hide Password');
			}
			else{
				$(this).find('.icon-link').removeClass('icn-eye-2').addClass('icn-eye-1');
				parent.find('input[type="text"]').attr('type','password');
				parent.find('.tooltip').text('Show Password');
			}
		});
	 });
	}

    const generateotp = (username) => {
        let uri = '/api/v1/sa/login/otp?username='+username;
        console.log(uri)
        
        axios.get(uri)
            .then((resp) => {
                if (resp.data.errorMessage && resp.data.codeNumber === "0034") {
					setAttempt(true)
				}else{
                    setAttempt(false)
                    setError(false)
                    setErrors("");
                    navigate("/sa/verifyotp");
                }
           }).catch((error) => {
               setError(true) 
               setErrors("OTP generation failed");
               setIcon("icn-invalid")
               console.log('OTP generation failed')
           } )
    }
    useEffect (() => {
        console.log('Inside error useEffect')
        if(auth.error){
                setError(true)
                setErrors("Invalid Credential!!");
                setIcon("icn-profile-2")
                dispatch(userlogout())
            }
    },[auth.error]);

    useEffect (() => {
        console.log('Inside user useEffect')
        
        if(auth.user){
          generateotp(state.username)            
        } 
        
      },[auth.user]);

    const handleClick = (e) =>{
        e.preventDefault();
        
        
     if(!state.username || !state.password){
        setError(true)
        setErrors("Username OR Password cannot be empty!!")
        setIcon("icn-invalid")
     }else if(capcha == false){
        setError(true)
        setErrors("Inavalid Captch!!")
        setIcon("icn-invalid")
     }
     else{
        setError(false)
        setErrors("")
        window.localStorage.setItem('username', JSON.stringify(state.username));
        dispatch(loginInitiate(state));
     }
    }

    useEffect(()=>{
        jQueryfuncition();
    },[])

	const jQueryfuncition = () => {
        $(function(){
            $('body').on('click', '.link-load-case',function(){
                $('.login-case.active').removeClass('active');
                $('.login-case[data-case="' + $(this).attr('data-case') + '"]').addClass('active');
                clearInterval(innterval);
                if($(this).attr('data-case') === 'verifyOtp'){
                    clearInterval(innterval);
                    $('.lnkShowDonut, .chart-donut-group').remove();
                    setTimeout(function() {
                        $('#counterContentOtp').html('<div class="chart-donut-group"><div class="chart-donut" style="--progress: 0%;"></div><div class="chart-donut-label" id="otpCounter">100</div></div>');
                        otpCounter();
                    }, 200);
                }
                else if($(this).attr('data-case') === 'verifyOtpForgotPassword'){
                    clearInterval(innterval);
                    $('.lnkShowDonut, .chart-donut-group').remove();
                    setTimeout(function() {
                        $('#counterContent').html('<div class="chart-donut-group"><div class="chart-donut" style="--progress: 0%;"></div><div class="chart-donut-label" id="otpCounter">100</div></div>');
                        otpCounter();
                    }, 200);
                }
                else if($(this).attr('data-case') === 'login2Fa'){
                    clearInterval(innterval);
                    $('.lnkShowDonut, .chart-donut-group').remove();
                    setTimeout(function() {
                        $('#counterContent2Fa').html('<div class="chart-donut-group"><div class="chart-donut" style="--progress: 0%;"></div><div class="chart-donut-label" id="otpCounter">100</div></div>');
                        otpCounter();
                    }, 200);
                }
        
                if($(this).attr('data-case') === 'signUp'){
                    $('#registrationLinks').removeClass('hidden');
                    $('#loginLinks').addClass('hidden');
                }
                else{
                    $('#registrationLinks').addClass('hidden');
                    $('#loginLinks').removeClass('hidden');
                }
        
                return false;
            });
            $('body').on('click', '.lnkShowDonut',function(){
                $(this).replaceWith('<div class="chart-donut-group"><div class="chart-donut" style="--progress: 0%;"></div><div class="chart-donut-label" id="otpCounter">100</div></div>');
                otpCounter();
                return false;
            });
        
            //otpCounter();
            // $("#joiningDate, #birthDate").inputmask({
            //     mask: '9999/99/99'
            // });
        
        
        });//end
    
        var innterval;
        function otpCounter(){
            var count = 100;
            innterval = setInterval(function() {
                if (count === 1){
                    clearInterval(innterval);
                    $('.chart-donut-group').replaceWith('<a href="#" class="link-small lnkShowDonut">Resend Code</a>');
                }
                count--;
                $("#otpCounter").html(count);
                $('.chart-donut').css('--progress',(100-count) + '%');
            }, 100);
        }
    }

    
    function SubmitButton(){
        
            if (state.username && state.password){
                return <button type="button" class="btn btn-primary btn-block link-load-case" data-case="login2Fa" onClick={handleClick} >Continue &amp; Verify</button> 
            } else{
                return  <button type="button" class="btn btn-secondary btn-block link-load-case"  data-case="login2Fa" onClick={handleClick}   disabled>Continue &amp; Verify</button> 
            }
        
      }

  return (
    <div classNamee="col-12 col-md-10 col-lg-7 login-content">
		{/* <div className="login-logo">
        <img src={companyLogo} className="login-logo-media" alt=''/></div> */}
        <ComplanyLogo logo={companyLogo} />
        {/* {auth.loading && <Loader />}      */}
        <div className="login-field-set">
								<div className="login-case-set">
									{/* Login page */}
									<div >
										<div className="login-case-heading">
											<h1 className="heading">Sign In</h1>
											<h6 className="sub-heading">Enter credentials to access your account</h6>
                                            
                                            { error && <InvalidError errormessage={errors} icon={icon} />}
                                            { attempt && <Toomanyattempt firstmsg="Too many resend attempts!" secondmsg="Please try again after " time="5 minutes" />}

                                        </div>
										<ul className="form-field-list login-case-fields">
											<li>
												<div className="anim-input">
													<input type="text" id="username" name="username" autocomplete="off" placeholder=" " onChange={handleInputChange}  ref={inputRef} />
													<label className="anim-label">Username*</label>
												</div>
											</li>
											<li>
												<div className="anim-input anim-input-append-group">
													<input type="password" name="password" autocomplete="off" placeholder=" " onChange={handleInputChange}/>
													<label className="anim-label">Password*</label>
													<div className="anim-input-append hasTooltip">
														<button  type="button" className="btn btn-icon btn-text lnkTogglePassword" onClick={handlePassword}>
															<div className="icon-link icn-eye-1"></div>
														</button>
															<div className="tooltip">Show Password</div>
													</div>
												</div>

											</li>
                                            <li> <Captcha onChange={onChangeCaptcha} placeholder="Enter captcha" /> </li>
											<li>
                                                <div class="form-group">
                                                { auth.loading ?
                                                 <button type="button" class="btn btn-outline-dark btn-block btn-loading-dark">Continue &amp; Verify</button>
                                                :
                                                 <SubmitButton /> }
													{/* <button type="button" class="btn btn-primary btn-block link-load-case" data-case="login2Fa" onClick={handleClick}>Continue &amp; Verify</button> */}
												</div>
											</li>
											<li>
                                            <Link to='/sa/forgotpassword'>Forgot Password?</Link>
											</li>
										</ul>
									</div>
                                    
									{/* Forgot Password */}
									{/* <ForgotPassword /> */}
									{/* <VerifyForgotOTP />								 */}
									{/* <SetNewPassword /> */}
								</div>

							</div>
    </div>
  )
}

export default SALoginSlice;
