import React from "react";
import {
  Image,

  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import {
  fetchDailyWeatherSelector,

} from "../../BLL/Weather/weather.selector";
import moment from "moment";

const DailyForecast = () => {
  const dailyForecastData = useSelector(fetchDailyWeatherSelector);

  console.log(dailyForecastData);
  return (
    <View style={styles.dailyForecastData}>
      {dailyForecastData
        ? dailyForecastData
            .filter((item: object, idx: number) => idx != 0)
            .map(
              (
                key: {
                  id: number;
                  dt: number;
                  temp: {
                    day: number;
                    min: number;
                  };
                  weather: [icon: any];
                },
                inx: number
              ) => (
                <View style={styles.dailyForecast__day} key={inx}>
                  <Text style={styles.dailyForecastData__max}>
                    {moment(key.dt * 1000).format("ddd")}
                  </Text>
                  <View style={{ width: 50}}>
                    <Image
                      style={styles.dailyForecast__img}
                      source={{
                        uri: `http://openweathermap.org/img/wn/${key.weather[0].icon}@2x.png`,
                      }}
                      resizeMode={"contain"}
                    />
                  </View>

                  <View style={{ flexDirection: "row", paddingRight: 10, width: 50}}>
                    <Text style={styles.dailyForecastData__max}>
                      {Math.round(key.temp.day)}
                    </Text>
                    <Text style={styles.dailyForecastData__min}>
                      {Math.round(key.temp.min)}
                    </Text>
                  </View>
                </View>
              )
            )
        : null}
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: {
    width: "95%",
  },
  container: {
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
  dailyForecastData__max: {
    fontSize: 20,
    fontWeight: "400",
    color: "#ffffff",
    width: 50
  },
  dailyForecastData__min: {
    fontSize: 20,
    fontWeight: "400",
    color: "#dedede",
  },

  dailyForecast__img: {
    width: 40,
    height: 40,
  },
  dailyForecast__day: {
    marginLeft: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "90%"
  },
  dailyForecastData: {
    alignItems: "center",
    justifyContent: "center",
width: "90%",
    marginTop: 15,

  },
});
export default DailyForecast;
