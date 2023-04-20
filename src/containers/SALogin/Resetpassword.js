import React, { useState, useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import '../../css/main.css'
import '../../css/normalize.css'
import axios from 'axios';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import { ToastContainer, toast } from 'react-toastify';
// import { Alert } from '@mui/material';
import Invalidtextfield from '../../component/Validations/Invalidtextfield';
import password_validate from '../../component/util/Util';
import PasswordChecklist from '../../component/Validations/PasswordChecklist';


function Resetpassword() {

    const navigate = useNavigate();
    const [user, setUser] = useState();
    const [error, setError] = useState();
    const [errors, setErrors] = useState();

    const [state, setState] = useState({
        password: "",
    });

    const [displayRules, setDisplayRules] = useState(false);
    const [shortname, setShortname] = useState();
    const handleInputChange = (v) => {
        let { name, value } = v.target;
        setState({ ...state, [name]: value });
        if (value != "")
            setDisplayRules(true);
        else
            setDisplayRules(false);
    }

    useEffect(() => {
        initializeData();
    }, [])

    function initializeData() {
        const username = JSON.parse(window.localStorage.getItem("username"));
        if (username) {
            // const name = username.split(".")
            // setShortname(name[0].toUpperCase().charAt(0)+name[0].toUpperCase().charAt(1))
            const [emailName] = username.split('@');
            const [firstName, lastName] = emailName.split('.');

            let shortName;
            if (firstName && lastName) {
                shortName = firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
            }
            setShortname(shortName);
            setUser(username);
        }
    }

    const handlePassword = () => {
        $(function () {
            $('body').on('click', '.lnkTogglePassword', function () {
                var parent = $(this).closest('.anim-input');
                if ($(this).find('.icon-link').hasClass('icn-eye-1')) {
                    $(this).find('.icon-link').removeClass('icn-eye-1').addClass('icn-eye-2');
                    parent.find('input[type="password"]').attr('type', 'text');
                    parent.find('.tooltip').text('Hide Password');
                }
                else {
                    $(this).find('.icon-link').removeClass('icn-eye-2').addClass('icn-eye-1');
                    parent.find('input[type="text"]').attr('type', 'password');
                    parent.find('.tooltip').text('Show Password');
                }
            });
        });
    }

    const resetpassword = () => {
        const username = JSON.parse(window.localStorage.getItem("username"))
        const code = JSON.parse(window.localStorage.getItem("code"))
        let uri = '/api/v1/sa/resetpassword?username=' + username + '&otp=' + code.code +
            '&password=' + state.password;
        console.log(uri)
        axios.put(uri)
            .then((resp) => {
                console.log("Inside Password reset : " + resp.data)
                if (resp.data.errorMessage && resp.data.codeNumber === "0038") {
                    setError(true)
                    setErrors(resp.data.message)
                }
                else {
                    window.localStorage.removeItem("code");
                    window.localStorage.removeItem("username");
                    toast.success("Reset Password Success!", {
                        position: "top-left",
                    });
                    navigate("/sa/login")
                }
            }).catch((error) => {
                console.log('Reset password failed!!')
                toast.error("Reset Password Failed!", {
                    position: "top-left",
                });
                navigate("/sa/login")
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!state.password) {
            setError(true)
            setErrors("Please enter new password!")
        } else {

            if (password_validate(state.password)) {
                console.log('Inside reset password')
                setError(false)
                resetpassword()

            } else {
                console.log('Inside regx match')
                setError(true)
                setErrors("Password policy not matched.")
            }
        }
    }

    function SubmitButton() {
        if (state.password) {
            return <button type="button" className="btn btn-primary btn-block  link-load-case" onClick={handleSubmit}>Save &amp; Continue</button>
        } else {
            return <button type="button" className="btn btn-secondary btn-block link-load-case" onClick={handleSubmit} disabled>Save &amp; Continue</button>
        }
    }

    return (
        <div >
            <div class="login-case-heading">
                <h1 class="heading">Almost There!</h1>
                <h6 class="sub-heading">Set a new password for your account</h6>
            </div>
            <ul class="form-field-list login-case-fields">
                <li>
                    <div class="flex-table flex-table-left align-items-center">
                        {/* <aside><div class="form-group avatar avatar-md"><img src={user} /></div></aside> */}
                        <aside><Avatar sx={{ bgcolor: deepOrange[500] }}>{shortname}</Avatar></aside>
                        <aside>
                            <div className="logged-in-user">
                                <div className="logged-in-user-name no-padding">
                                    <h6>{user}</h6>
                                    <p>Super Admin</p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </li>
                <li>
                    <div className={`anim-input anim-input-append-group ${error && 'anim-input-error'}`}>

                        <input type="password" name="password" autocomplete="off" placeholder=" " onChange={handleInputChange} />
                        <label className="anim-label">New Password*</label>
                        <div className="anim-input-append">
                            <button type="button" className="btn btn-icon btn-text lnkTogglePassword" onClick={handlePassword}>
                                <div className="icon-link icn-eye-1"></div>
                            </button>
                            <div className="tooltip">Show Password</div>
                        </div>
                    </div>
                    {error && <Invalidtextfield error={errors} />}
                </li>
                <PasswordChecklist
                    shouldDisplay={displayRules}
                    password={state.password}
                />
                <li>
                    <div className="form-group">
                        <SubmitButton />
                        {/* <button type="button" className="btn btn-primary btn-block  link-load-case" onClick={handleSubmit}>Save &amp; Continue</button> */}
                    </div>
                </li>
            </ul>
            <ToastContainer
                autoClose={5000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                theme="dark"
            />
        </div>
    )
}

export default Resetpassword

