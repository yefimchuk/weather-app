import React from "react";
import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {useSelector} from "react-redux";
import {fetchHourlyWeatherSelector} from "../../BLL/Weather/weather.selector";
import moment from "moment";

const HourForecast = () => {
  const hourForecastData = useSelector(fetchHourlyWeatherSelector);
  console.log(hourForecastData)
  /*
        console.log(moment(1652788800 ).format('HH'))
    */

  return (
      <View style={styles.hourForecast}>
        <ScrollView horizontal={true} style={styles.scrollView}>
          {hourForecastData
              ? hourForecastData
                  .filter((item: object, idx: number) => idx < 24)
                  .map((key: { id: number, dt: number, temp: number, weather: [icon: any] }, inx: number) => (

                      <View style={styles.weather} key={inx}>
                        <Text>
                          {moment(key.dt * 1000).format("HH") ===
                          moment(+Date.now()).format("HH")
                              ? "now"
                              : moment(key.dt * 1000).format("HH")}
                        </Text>
                        <Image
                            style={styles.currentForecast__img}
                            source={{
                              uri: `http://openweathermap.org/img/wn/${key.weather[0].icon}@2x.png`,
                            }}
                            resizeMode={"contain"}
                        />
                        <Text>{Math.round(key.temp) + "°"}</Text>
                      </View>
                  ))
              : null}
        </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: "row",
  },
  currentForecast__img: {
    width: 40,
    height: 40,

  },
  weather: {
    justifyContent: "center",
    alignItems: "center",
  },
  hourForecast: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 0.14,
    borderWidth: 1,
  },
});
export default HourForecast;
