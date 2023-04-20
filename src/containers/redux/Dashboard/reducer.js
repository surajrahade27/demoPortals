import * as type from './actionTypes'
import {Record} from 'immutable'

const initialState = new Record({
    summary: {},
    loading: false
})

const dashboardReducer = (state = initialState, action) =>{
    switch(action.type){
        case type.GET_SUMMARY_STARTED:
            return {
                ...state,
                loading: action.payload,
            } 
       case type.GET_SUMMARY:
           return {
               ...state,
               summary: action.payload,
               loading: false,
           }
       default: 
           return state;
    }
   };
   
   export default dashboardReducer;