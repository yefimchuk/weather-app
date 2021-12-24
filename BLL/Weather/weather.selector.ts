import { createSelector } from "reselect";

const selectSelf = (state: object) => state;
export const fetchCoordinatesHandlerSelector = createSelector(
    selectSelf,
    (state: any) => state.weatherSlice.coordinatesData
);


export const fetchCurrentWeatherSelector = createSelector(
    selectSelf,
    (state: any) => state.weatherSlice.currentForecast
);
export const fetchHourlyWeatherSelector = createSelector(
    selectSelf,
    (state: any) => state.weatherSlice.hourlyForecast
);
export const fetchDailyWeatherSelector = createSelector(
    selectSelf,
    (state: any) => state.weatherSlice.dailyForecast
);
export const fetchWeatherDataSelector = createSelector(
    selectSelf,
    (state: any) => state.weatherSlice.weatherData
);
export const fetchCitySelector = createSelector(
    selectSelf,
    (state: any) => state.weatherSlice.weatherData.city
);
export const fetchingSelector = createSelector(
    selectSelf,
    (state: any) => state.weatherSlice.isFetching
);



