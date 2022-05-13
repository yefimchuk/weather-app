import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import WeatherService from "../../DAL/http/WeatherService";

export const fetchCoordinatesHandler: any = createAsyncThunk(
    "weather/fetchCoordinatesHandler",
    async (city: string, {rejectWithValue}) => {
        try {
            let response = await WeatherService.FetchCoordinatesHandler(city)
            if (response.statusText === "OK") {
                return response.data.coord
            } else {
                return rejectWithValue(response)
            }

        } catch (err) {
            return rejectWithValue(err)
        }

    }
);
export const fetchWeatherByCoordinatesHandler: any = createAsyncThunk(
    "weather/fetchWeatherByCoordinatesHandler",
    async (coordinates: { lon: number, lat: number }, {rejectWithValue}) => {
        try {
            let response = await WeatherService.FetchWeatherByCoordinatesHandler(coordinates)
            if (response.statusText === "OK") {
                return response.data
            } else {
                return rejectWithValue(response)
            }
        } catch (err) {
            return rejectWithValue(err)
        }

    }
);
export const weatherSlice: any = createSlice({
    name: "weather",
    initialState: {
        isFetching: false,
        lat: null,
        lon: null,
        coordinatesData: null,
        weatherData: null,
        errorMessage: null
    } as any,
    reducers: {},
    extraReducers: {
        [fetchCoordinatesHandler.pending]: (state, action) => {
            state.isFetching = true
        },
        [fetchCoordinatesHandler.fulfilled]: (state, action) => {
            state.isFetching = false
            state.coordinatesData = action.payload
        },
        [fetchCoordinatesHandler.rejected]: (state, action) => {
            state.isFetching = false
            state.errorMessage = action.payload
        },
        [fetchWeatherByCoordinatesHandler.pending]: (state, action) => {
            state.isFetching = true
        },
        [fetchWeatherByCoordinatesHandler.fulfilled]: (state, action) => {
            state.isFetching = false
            debugger
            state.weatherData = action.payload
        },
        [fetchWeatherByCoordinatesHandler.rejected]: (state, action) => {
            state.isFetching = false
            state.errorMessage = action.payload
        },
    }
});
export default weatherSlice.reducer;
