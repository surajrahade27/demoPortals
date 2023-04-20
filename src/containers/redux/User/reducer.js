import * as type from './actionType'
import {Record} from 'immutable'

const initialState = new Record({
    users: [],
    user: {},
    loading: false
})

const usersReducer = (state = initialState, action) =>{
 switch(action.type){
    case type.GET_USERS:
        return {
            ...state,
            users: action.payload,
            loading: false,
        }
    case type.DELETE_USER:
    case type.ADD_USER:
        return {
            ...state,
            loading: false,
        }
    case type.GET_USER_BY_ID:
        return {
            ...state.user,
            user: action.payload,
            loading: false,
        }
    default: 
        return state;
 }
};

export default usersReducer;