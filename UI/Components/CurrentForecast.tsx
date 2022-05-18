import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import {
  fetchCurrentWeatherSelector,
  fetchingSelector,
  fetchWeatherDataSelector,
} from "../../BLL/Weather/weather.selector";

const CurrentForecast = () => {
  const currentWeatherData = useSelector(fetchCurrentWeatherSelector);
  const weatherData = useSelector(fetchWeatherDataSelector);
  const isFetching = useSelector(fetchingSelector);

  return (
    <View style={styles.currentForecast}>
      {!isFetching && (
        <View>
          {currentWeatherData.weather && (
            <View style={styles.currentForecast__FlexCol}>
              <Text style={styles.currentForecast__city}>
                {weatherData.name}
              </Text>
              <View style={styles.currentForecast__FlexRow}>
                <Image
                  style={styles.currentForecast__img}
                  source={{
                    uri: `http://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}@2x.png`,
                  }}
                  resizeMode={"contain"}
                />
                <Text style={styles.currentForecast__description}>
                  {currentWeatherData.weather[0].main}
                </Text>
              </View>

              <Text style={styles.currentForecast__degrees}>
                {" " + Math.round(currentWeatherData.temp) + "°"}
              </Text>

              <View style={styles.currentForecast__FlexRow}>
                <Text style={styles.currentForecast__hl}>{`H: ${Math.round(weatherData.main.temp_max)}°`}</Text>
                <Text style={styles.currentForecast__hl}>{`L: ${Math.floor(weatherData.main.temp_min)}°`}</Text>
              </View>
            </View>
          )}
        </View>
      )}
    </View>
  );
};
export default CurrentForecast;
const styles = StyleSheet.create({
  currentForecast__img: {
    width: 40,
    height: 40,
  },
  currentForecast__hl: {
    color: "#FFFFFF",
    fontSize: 20
  },
  currentForecast: {
    flex: 0.4,

    justifyContent: "flex-start",
    alignItems: "center",
  },
  currentForecast__FlexRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  currentForecast__description: {
    color: "white",
    fontSize: 20,
  },
  currentForecast__city: {
    fontSize: 45,
    fontWeight: "300",
    color: "#FFFFFF",
  },
  currentForecast__degrees: {
    fontSize: 100,
    fontWeight: "200",

    color: "white",
  },
  currentForecast__FlexCol: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
