import React from "react";
import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import { useSelector } from "react-redux";
import {
  fetchDailyWeatherSelector,
  fetchingSelector,
} from "../../BLL/Weather/weather.selector";
import moment from "moment";

const DailyForecast = () => {
  const dailyForecastData = useSelector(fetchDailyWeatherSelector);
  const isFetching = useSelector(fetchingSelector);
  console.log(dailyForecastData);
  return <View style={styles.dailyForecastData}>
      <ScrollView style={styles.scroll} >
        {dailyForecastData
          ? dailyForecastData
              .filter((item: object, idx: number) => idx != 0)
              .map(
                (
                  key: {
                    id: number;
                    dt: number;
                    temp: {
                      day: number,
                      min: number
                    };
                    weather: [icon: any];
                  },
                  inx: number
                ) => (
                  <View style={styles.dailyForecast__day} key={inx}>
                    <Text>{  moment(key.dt * 1000).format("ddd")}</Text>

                      <Image
                          style={styles.dailyForecast__img}
                          source={{
                            uri: `http://openweathermap.org/img/wn/${key.weather[0].icon}@2x.png`,
                          }}
                          resizeMode={"contain"}
                      />
                    <View style={{flexDirection: "row", paddingRight: 10}}>
                      <Text style={styles.dailyForecastData__max}>
                        {Math.round(key.temp.day) }
                      </Text>
                      <Text style={styles.dailyForecastData__min}>
                        {Math.round(key.temp.min) }
                      </Text>
                    </View>



                  </View>
                )
              )
          : null}
      </ScrollView>
    </View>
  ;
};

const styles = StyleSheet.create({
  scroll: {
    width: "95%",
  },
  dailyForecastData__max: {
    fontSize: 18,
    fontWeight: "400",
    color: "#ffffff",
  },
  dailyForecastData__min: {
    fontSize: 18,
    fontWeight: "400",
    color: "#dedede",
  },
  hourForecast__text: {
    fontSize: 18,
    fontWeight: "400",
    color: "#ffffff",
  },
  dailyForecast__img: {
    width: 40,
    height: 40,
  },
  dailyForecast__day: {
    marginLeft: 10,
    justifyContent:'space-between' ,
    alignItems: "center",
    flexDirection: "row",

  },
  dailyForecastData: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: .3,

    borderWidth:1
  },
});
export default DailyForecast;
