import { createSelector } from "reselect";

const selectSelf = (state: object) => state;
export const fetchCoordinatesHandlerSelector = createSelector(
    selectSelf,
    (state: any) => state.weatherSlice.coordinatesData
);
