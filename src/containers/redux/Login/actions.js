import * as type from './actionType'
import axios from 'axios';
import { lms } from '../../api/api'

const loginStart = () =>({
    type: type.LOGIN_STARTED,
    payload: true
});

const loginSuccess = (token) =>({
    type: type.LOGIN_SUCCESS,
    payload: token
});

const loginFail = (error) =>({
    type: type.LOGIN_FAIL,
    payload: error
});

const logout = () =>({
 type: type.LOGOUT
});

// const codeverified = () =>({
//     type: type.VERIFY_CODE_SUCCESS
// });

export const userlogout = () => {
    return function(dispatch){
    window.localStorage.removeItem("username");
    localStorage.removeItem('persist:root');
    dispatch(logout())
  } 
};

export const loginInitiate = (cred) => {
    let uri = '/api/v1/authenticate'
    console.log(uri)
    
    return function(dispatch){
        dispatch(loginStart());
        axios.post(uri, cred)
        .then((resp) => {
                dispatch(loginSuccess(resp.data.jwt))
                // window.localStorage.setItem("login", JSON.stringify({
                //     userLogin: true,
                //     token: resp.data.jwt,
                // }));
        }).catch((error) => {
                dispatch(loginFail(error))
        })
    }
}



// export const loginUser = (cred, navigate) => {
//     let uri = process.env.REACT_APP_API_LOGIN
//     console.log(uri)
//     return function () {
//         axios.post(uri, cred)
//         .then((resp) => {
//             if(resp.data.jwt == null){
//                 navigate("/")
//             }
//              else {
//                 const token = JSON.stringify(resp.data.jwt);
//                 window.localStorage.setItem('token', JSON.stringify(token));
//                 console.log("token:", token);
//                 navigate("/home")
//              }
//         }).catch((error) => console.log(error))
//     };
// };