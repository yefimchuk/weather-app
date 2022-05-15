import React from "react";
import {View} from "react-native";
import {useSelector} from "react-redux";
import {fetchWeatherDataSelector} from "../../BLL/Weather/weather.selector";

const CurrentForecast = () => {
    const weatherData = useSelector(fetchWeatherDataSelector)
    console.log(weatherData)
    return (
        <View>


        </View>
    )
}
export default CurrentForecast