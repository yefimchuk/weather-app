import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import WeatherService from "../../DAL/http/WeatherService";

export const fetchCoordinatesHandler: any = createAsyncThunk(
  "weather/fetchCoordinatesHandler",
  async (city: string, { dispatch, rejectWithValue }) => {
    try {

      let response = await WeatherService.FetchCoordinatesHandler(city);

      if (response.status === 200) {
        dispatch(fetchWeatherByCoordinatesHandler(response.data.coord));
        return response;
      } else {
        return rejectWithValue(response);
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const fetchWeatherByCoordinatesHandler: any = createAsyncThunk(
  "weather/fetchWeatherByCoordinatesHandler",
  async (coordinates: { lon: number; lat: number }, { rejectWithValue }) => {
    try {

      let response = await WeatherService.FetchWeatherByCoordinatesHandler(
        coordinates
      );

      if (response.status === 200) {
        return response.data;
      } else {
        return rejectWithValue(response);
      }
    } catch (err) {

      return rejectWithValue(err);
    }
  }
);
export const weatherSlice: any = createSlice({
  name: "weather",
  initialState: {
    isFetching: false,
    lat: null,
    lon: null,
    weatherData: {
      main: {
        temp_max: null,
        temp_min: null,
      },
      name: null,
    },
    currentForecast: {
      temp: null,
    },
    hourlyForecast: null,
    dailyForecast: null,
    error: false
  } as any,
  reducers: {},
  extraReducers: {
    [fetchCoordinatesHandler.pending]: (state, action) => {
      state.isFetching = true;
    },
    [fetchCoordinatesHandler.fulfilled]: (state, action) => {
      state.isFetching = false;
      state.error = false
      state.weatherData = action.payload.data;
    },
    [fetchCoordinatesHandler.rejected]: (state, action) => {

      state.isFetching = false;
      state.error = true
    },
    [fetchWeatherByCoordinatesHandler.pending]: (state, action) => {
      state.isFetching = true;
    },
    [fetchWeatherByCoordinatesHandler.fulfilled]: (state, action) => {
      state.error = false

      state.isFetching = false;
      state.currentForecast = action.payload.current;
      state.hourlyForecast = action.payload.hourly;
      state.dailyForecast = action.payload.daily;
      state.timezone = action.payload.timezone;
    },
    [fetchWeatherByCoordinatesHandler.rejected]: (state, action) => {
      state.isFetching = false;
      state.error = true
    },
  },
});
export default weatherSlice.reducer;
