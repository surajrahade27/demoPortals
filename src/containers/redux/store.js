import {legacy_createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk"
import rootReducer from "./root-reducer"
import { persistStore } from "redux-persist";

const middleware = [reduxThunk] 

if(process.env.NODE_ENV === "development")
 middleware.push(logger)

 export const store = legacy_createStore(rootReducer, applyMiddleware(...middleware))

 export const persistor = persistStore(store);