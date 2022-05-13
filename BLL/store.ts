
import weatherSlice from "./Weather/weather.slice";
import {configureStore} from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        weatherSlice
    },
});

export default store;