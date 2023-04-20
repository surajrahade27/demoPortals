import * as type from './actionType'
import {Record} from 'immutable'

const initialState = new Record({
    portals: [],
    portal: {},
    loading: false
})

const portalsReducer = (state = initialState, action) =>{
 switch(action.type){
    case type.GET_PORTALS:
        return {
            ...state,
            portals: action.payload,
            loading: false,
        }
    case type.DELETE_PORTAL:
    case type.ADD_PORTAL:
        return {
            ...state,
            loading: false,
        }
    case type.GET_PORTAL_BY_ID:
        return {
            ...state.portal,
            portal: action.payload,
            loading: false,
        }
    default: 
        return state;
 }
};

export default portalsReducer;