import * as type from './actionType'
import {Record} from 'immutable'

const initialState = new Record({
    user: null,
    loading: false,
    error: null,
    isCodeVerified: false,
})

const authReducer = (state = initialState, action) =>{

    switch(action.type){
        case type.LOGIN_STARTED:
            return{
                ...state,
                loading: action.payload,
            }
        case type.LOGIN_SUCCESS:
            return{
                ...state,
                loading: false,
                user: action.payload,
                error: null,
            }
        case type.LOGIN_FAIL:
            return{ 
                ...state,
                loading: false,
                user: null,
                error: action.payload,
                isCodeVerified: false
            }  
        case type.LOGOUT:
             return {
                ...state,   
                user: null,
                error: null,
                isCodeVerified: false,
                }      
        default:
            return state;    
    }
};

export default authReducer;