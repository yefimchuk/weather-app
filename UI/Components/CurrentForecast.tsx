import React, { useRef } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import {
  errorSelector,
  fetchCurrentWeatherSelector,
  fetchingSelector,
  fetchWeatherDataSelector,
} from "../../BLL/Weather/weather.selector";
import ForecastSearch from "./ForecastSearch";
import HourForecast from "./HourForecast";
import DailyForecast from "./DailyForecast";
import OtherInfo from "./OtherInfo";

const CurrentForecast = ({ scrolling }: any) => {
  const currentWeatherData = useSelector(fetchCurrentWeatherSelector);
  const weatherData = useSelector(fetchWeatherDataSelector);
  const isFetching = useSelector(fetchingSelector);
  const scrollY = useRef(new Animated.Value(0)).current;
  const error = useSelector(errorSelector);
  const opacityTemp = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });
  const scaleTemp = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [100, 40],
    extrapolate: "clamp",
  });
  const opacityHourlyForecast = scrollY.interpolate({
    inputRange: [0, 300],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });
  const scaleSearch = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -100],
    extrapolate: "clamp",
  });
  const fontSizeCity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [65, 43],
    extrapolate: "clamp",
  });
  const scaleScrollView = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [0, -165],
    extrapolate: "clamp",
  });
  const description = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  return (
    <View>
      <Animated.View
        style={{
          height: 120,
          justifyContent: "center",
          transform: [
            {
              translateY: scaleSearch,
            },
          ],
        }}
      >
        <ForecastSearch />
      </Animated.View>
      {isFetching? <Text>LOADING</Text> : error ? <Text style={{ textAlign: "center", color: "white" }}>
          Sorry, i can't find this city. :(
        </Text> : (
        <View style={styles.currentForecast}>
          {!isFetching && (
            <View>
              {currentWeatherData.weather && (
                <View style={styles.currentForecast__FlexCol}>
                  <Animated.View
                    style={{
                      height: 110,

                      transform: [
                        {
                          translateY: scaleSearch,
                        },
                      ],
                    }}
                  >
                    <Animated.Text
                      style={{
                        fontSize: fontSizeCity,
                        fontWeight: "300",
                        color: "#FFFFFF",
                      }}
                    >
                      {weatherData.name}
                    </Animated.Text>
                    <Animated.View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: description,
                      }}
                    >
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
                    </Animated.View>
                  </Animated.View>

                  <Animated.ScrollView
                    style={{
                      width: "100%",
                      zIndex: 10,
                      height: 200,

                      transform: [
                        {
                          translateY: scaleScrollView,
                        },
                      ],
                    }}
                    onScroll={Animated.event(
                      [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                      { useNativeDriver: false }
                    )}
                  >
                    <Animated.View
                      style={{
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        opacity: opacityTemp,
                      }}
                    >
                      <Animated.Text
                        style={{
                          fontSize: scaleTemp,
                          fontWeight: "200",
                          color: "white",
                        }}
                      >
                        {" " + Math.round(currentWeatherData.temp) + "°"}
                      </Animated.Text>
                      <View style={{ flexDirection: "row" }}>
                        <Text
                          style={styles.currentForecast__hl}
                        >{`H: ${Math.round(weatherData.main.temp_max)}°`}</Text>
                        <Text
                          style={styles.currentForecast__hl}
                        >{`L: ${Math.floor(weatherData.main.temp_min)}°`}</Text>
                      </View>
                    </Animated.View>

                    <Animated.View
                      style={{
                        position: "relative",
                        opacity: opacityHourlyForecast,
                      }}
                    >
                      <HourForecast />
                    </Animated.View>

                    <DailyForecast />
                    <Animated.View>
                      <OtherInfo />
                    </Animated.View>
                  </Animated.ScrollView>
                </View>
              )}
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
    fontSize: 20,
  },
  currentForecast: {
    justifyContent: "flex-start",
    alignItems: "center",
  },

  currentForecast__description: {
    color: "white",
    fontSize: 20,
  },

  currentForecast__FlexCol: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
