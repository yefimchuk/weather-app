import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {useSelector} from "react-redux";
import {
  fetchCurrentWeatherSelector,
  fetchingSelector,
  fetchWeatherDataSelector,
} from "../../BLL/Weather/weather.selector";

const CurrentForecast = () => {
  const currentWeatherData = useSelector(fetchCurrentWeatherSelector);

  const weatherData = useSelector(fetchWeatherDataSelector);
  const isFetching = useSelector(fetchingSelector);
  console.log(weatherData);
  return (
      <View style={styles.currentForecast}>
        {!isFetching && (
            <View>
              {currentWeatherData.weather && (
                  <View style={styles.currentForecast__FlexCol}>
                    <Text style={styles.currentForecast__city}>{weatherData.name}</Text>
                    <Text style={styles.currentForecast__description}>{currentWeatherData.weather[0].main}</Text>
                    <View style={styles.currentForecast__FlexRow}>
                      <Image
                          style={styles.currentForecast__img}
                          source={{
                            uri: `http://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}@2x.png`,
                          }}
                          resizeMode={"contain"}
                      />
                      <Text>{Math.round(currentWeatherData.temp) + "°"}</Text>
                    </View>

                    <View style={styles.currentForecast__FlexRow}>
                      <Text>{`H: ${Math.round(weatherData.main.temp_max)}°`}</Text>
                      <Text>{`L: ${Math.floor(weatherData.main.temp_min)}°`}</Text>

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
    width: 75,
    height: 75,
  },
  currentForecast: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  currentForecast__FlexRow: {
    flexDirection: "row",
    justifyContent:"center",
    alignItems:"center",
  },
  currentForecast__description: {
    color: "white",
    fontSize: 20
  },
  currentForecast__city: {

    fontSize: 45,
    fontWeight: "300",
    color: "#FFFFFF"
  },
  currentForecast__FlexCol: {
    flexDirection: "column",
    justifyContent:"center",
    alignItems:"center",
  }
});
