import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import mainReducers from "./Reducers";
let store = createStore(mainReducers, applyMiddleware(thunk));

export default store