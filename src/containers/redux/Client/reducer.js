import * as type from './actionType'
import {Record} from 'immutable'

const initialState = new Record({
    client: null,
    error: null,
    loading: false
})

const clientReducer = (state=initialState, action) =>{
    switch(action.type){
        case type.CLIENT_CREATE_STARTED:
            return{
                ...state,
                loading: true,
            }
        case type.CLIENT_CREATE_SUCCESS:
            return{
                ...state,
                loading: false,
                client: action.payload,
                error: null ,
            }
        case type.CLIENT_CREATE_FAIL:
            return{ 
                ...state,
                loading: false,
                error: action.payload,
                client: null,
            }       
        default:
            return state;
    }
}

export default clientReducer;