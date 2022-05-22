import React from "react";
import {Text, View} from "react-native";
import {useSelector} from "react-redux";
import {fetchCurrentWeatherSelector} from "../../BLL/Weather/weather.selector";
import moment from "moment";

const OtherInfo = () => {
  const {sunset, sunrise, wind_speed, feels_like, humidity, visibility} = useSelector(fetchCurrentWeatherSelector);
console.log(humidity)
  const sunSet = moment(sunset * 1000, true).format("k:kk");
  const sunRise = moment(sunrise * 1000).format("hh:mm ");
  const windSpeed = wind_speed + "km/hr";
  const windFeelsLike = feels_like + " ms";
  const visibilityWeather = visibility/ 1000 + "km"
  const humidityWeather = humidity + "%"
  return (<View
          style={{
            height: 480,
            borderWidth: 1,
          }}
      >
        <View>
          <ItemInfo
              titleLeft={"SUNRISE"}
              titleRight={"SUNSET"}
              valueLeft={sunRise}
              valueRight={sunSet}
          />
        </View>
        <View>
          <ItemInfo
              titleLeft={"WIND SPEED"}
              titleRight={"FEELS LIKE"}
              valueLeft={windSpeed}
              valueRight={windFeelsLike}
          />
        </View>
        <View>
          <ItemInfo
              titleLeft={"VISIBILITY"}
              titleRight={"HUMIDITY"}
              valueLeft={visibilityWeather}
              valueRight={humidityWeather}
          />
        </View>
        <View>
          <ItemInfo
              titleLeft={"SUNRISE"}
              titleRight={"SUNSET"}
              valueLeft={"5:51"}
              valueRight={"5:51"}
          />
        </View>
        <View>
          <ItemInfo
              titleLeft={"SUNRISE"}
              titleRight={"SUNSET"}
              valueLeft={"5:51"}
              valueRight={"5:51"}
          />
        </View>
      </View>
  );
};
export default OtherInfo;

export const ItemInfo = ({
                           titleLeft,
                           titleRight,
                           valueLeft,
                           valueRight,
                         }: any) => {
  debugger;

  return (
      <View
          style={{
            justifyContent: "space-between",
            margin: 20,
            alignItems: "center",
            flexDirection: "row",
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: "rgba(220,220,220,0.71)",
          }}
      >
        <View>
          <Text style={{fontSize: 15}}>{titleLeft}</Text>
          <Text>{valueLeft}</Text>
        </View>
        <View>
          <Text style={{fontSize: 15}}>{titleRight}</Text>
          <Text>{valueRight}</Text>
        </View>
      </View>
  );
};
