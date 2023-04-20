import * as type from './actionType'
import axios from '../../api/api';
//import {lms} from '../../api/api'

const getUsers = (users) =>({
    type: type.GET_USERS,
    payload: users,
});

const deleteUser = () =>({
    type: type.DELETE_USER
});

const addNewUser = () =>({
    type: type.ADD_USER
});

const getUser= (user) =>({
    type: type.GET_USER_BY_ID,
    payload: user,
});

const userEdit = () =>({
    type: type.EDIT_USER
});


export const loadUsers = () => {
    let uri = process.env.REACT_APP_API
    console.log(uri)
    return function (dispatch) {
        axios.get(uri)
        .then((resp) => {
            console.log("resp", resp)
            dispatch(getUsers(resp.data))
        }).catch((error) => console.log("API Not Found"))
    };
};

export const deleteUsers = (id) => {
    let uri = process.env.REACT_APP_API
    uri = uri +"/"+id;
    console.log(uri)
    return function (dispatch) {
        axios.delete(uri)
        .then((resp) => {
            console.log("resp", resp)
            dispatch(deleteUser());
            dispatch(loadUsers());
        }).catch((error) => console.log(error))
    };
};

export const addUser = (user) => {
    let uri = process.env.REACT_APP_API
    console.log(uri)
    return function (dispatch) {
        axios.post(uri, user)
        .then((resp) => {
            console.log("resp", resp)
            dispatch(addNewUser());
        }).catch((error) => console.log(error))
    };
};

export const getUserById = (id) => {
    let uri = process.env.REACT_APP_API
    uri = uri +"/"+id;
    console.log(uri);
    return function (dispatch) {
        axios.get(uri)
        .then((resp) => {
            console.log("resp", resp)
            dispatch(getUser(resp.data));
        }).catch((error) => console.log(error))
    };
};

export const editUser = (user) => {
    let uri = process.env.REACT_APP_API
    console.log(uri)
    return function (dispatch) {
        axios.post(uri, user)
        .then((resp) => {
            console.log("resp", resp)
            dispatch(addNewUser());
        }).catch((error) => console.log(error))
    };
};