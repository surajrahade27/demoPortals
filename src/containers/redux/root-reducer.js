import { combineReducers } from "redux";   
import usersReducer from "./User/reducer"; 
import authReducer from "./Login/reducer";
import clientReducer from "./Client/reducer"
import dashboardReducer from "./Dashboard/reducer"
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth"]
}
const rootReducer = combineReducers({
    users: usersReducer,
    dashboard: dashboardReducer,
    auth: authReducer,
    client: clientReducer,
});


export default persistReducer(persistConfig, rootReducer);