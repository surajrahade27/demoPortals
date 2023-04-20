import * as type from './actionTypes'
import axios from '../../api/api';



const getsummary = (summary) =>({
    type: type.GET_SUMMARY,
    payload: summary,
});

const getsummarystarted = () =>({
    type: type.GET_SUMMARY_STARTED,
    payload: true
});

export const fetchSummary = () => async(dispatch)=>{
    let uri = "/api/v1/clientsummary"
    console.log("uri:"+uri)
    dispatch(getsummarystarted())
    await axios.get(uri)
        .then((resp) => {
            console.log("resp", resp)
            dispatch(getsummary(resp.data))
        }).catch((error) => console.log("API Not Found"))
     
};