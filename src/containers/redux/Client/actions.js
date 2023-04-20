import * as type from './actionType'
import axios from '../../api/api';


const createClientStart = () =>({
    type: type.CLIENT_CREATE_STARTED
});

const createClientSuccess = (data) =>({
    type: type.CLIENT_CREATE_SUCCESS,
    payload: data
});

const createClientFail = (error) =>({
    type: type.CLIENT_CREATE_FAIL,
    payload: error
});

export const creatClient = (client) => async(dispatch) => {
    
    let uri = "/api/v1/clientm"
    console.log(uri)
    dispatch(createClientStart());
    await axios.post(uri, client)
        .then((resp) => {
            console.log("resp", resp.data)
            dispatch(createClientSuccess(resp.data));
        })
        .catch((error) => createClientFail(error));


    // return function (dispatch) {
    //     dispatch(createClientStart());
    //     axios.post(uri, client)
    //     .then((resp) => {
    //         console.log("resp", resp.data)
    //         dispatch(createClientSuccess(resp.data));
    //     }).catch((error) => createClientFail(error))
    // };
};