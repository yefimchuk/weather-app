import React, {useRef} from "react";
import {Animated, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {useSelector} from "react-redux";
import {
  fetchCurrentWeatherSelector,
  fetchingSelector,
  fetchWeatherDataSelector,
} from "../../BLL/Weather/weather.selector";
import ForecastSearch from "./ForecastSearch";
import HourForecast from "./HourForecast";
import DailyForecast from "./DailyForecast";

const CurrentForecast = ({scrolling}: any) => {
  const currentWeatherData = useSelector(fetchCurrentWeatherSelector);
  const weatherData = useSelector(fetchWeatherDataSelector);
  const isFetching = useSelector(fetchingSelector);
  const scrollY = useRef(new Animated.Value(0)).current;

  const opacityTemp = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });
  const opacityHourlyForecast = scrollY.interpolate({
    inputRange: [0, 1040],
    outputRange: [0, -100],
    extrapolate: "clamp",
  });
  const scaleSearch = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -100],
    extrapolate: "clamp",
  });
  const scaleScrollView = scrollY.interpolate({
    inputRange: [0, 230],
    outputRange: [0, -100],
    extrapolate: "clamp",
  });
  return (
      <View>
        <Animated.View style={{
          height: 120, justifyContent: "center", transform: [{
            translateY: scaleSearch
          }]

        }}>
          <ForecastSearch/>
        </Animated.View>

        <View style={styles.currentForecast}>
          {!isFetching && (
              <View>
                {currentWeatherData.weather && (
                    <View style={styles.currentForecast__FlexCol}>
                      <Animated.View style={{
                        height: 110, transform: [{
                          translateY: scaleSearch
                        }]
                      }}>
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
                      </Animated.View>


                      <Animated.ScrollView
                          style={{
                            width: "100%",
                            transform: [{
                              translateY: scaleScrollView
                            }]
                          }}
                          onScroll={Animated.event(
                              [{nativeEvent: {contentOffset: {y: scrollY}}}],
                              {useNativeDriver: false}
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
                          <Text style={styles.currentForecast__degrees}>
                            {" " + Math.round(currentWeatherData.temp) + "°"}
                          </Text>
                          <View style={{flexDirection: "row"}}>
                            <Text
                                style={styles.currentForecast__hl}
                            >{`H: ${Math.round(weatherData.main.temp_max)}°`}</Text>
                            <Text
                                style={styles.currentForecast__hl}
                            >{`L: ${Math.floor(weatherData.main.temp_min)}°`}</Text>
                          </View>
                        </Animated.View>

                        <Animated.View style={{ position: "relative",top: opacityHourlyForecast}}>

                          <HourForecast/>

                        </Animated.View>

                          <DailyForecast/>
                          <Animated.View>
                            <Text>adad</Text>
                            <Text>adad</Text>
                            <Text>adad</Text>
                            <Text>adad</Text>
                            <Text>adad</Text>
                            <Text>adad</Text>
                            <Text>adad</Text>
                            <Text>adad</Text>
                            <Text>adad</Text>
                            <Text>adad</Text>
                            <Text>adad</Text>
                            <Text>adad</Text>
                            <Text>adad</Text>
                            <Text>adad</Text>
                            <Text>adad</Text>
                            <Text>adad</Text>
                            <Text>adad</Text>
                            <Text>adad</Text>
                            <Text>adad</Text>
                            <Text>adad</Text>
                            <Text>adad</Text>
                            <Text>adad</Text>
                            <Text>adad</Text>
                            <Text>adad</Text>
                            <Text>adad</Text>
                            <Text>adad</Text>
                            <Text>adad</Text>
                            <Text>adad</Text>
                            <Text>adad</Text>
                            <Text>adad</Text>
                            <Text>adad</Text>
                            <Text>adad</Text>
                          </Animated.View>


                      </Animated.ScrollView>
                    </View>
                )}
              </View>
          )}
        </View>
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
  currentForecast__FlexRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  currentForecast__description: {
    color: "white",
    fontSize: 20,
  },
  currentForecast__city: {
    fontSize: 65,
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
