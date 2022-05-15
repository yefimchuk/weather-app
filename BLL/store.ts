
import weatherSlice from "./Weather/weather.slice";
import {applyMiddleware, combineReducers, configureStore, createStore} from "@reduxjs/toolkit";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


let reducers = combineReducers({
    weatherSlice
});

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
);
export default store;