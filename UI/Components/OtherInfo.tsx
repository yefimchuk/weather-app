import React from "react";
import {Text, View} from "react-native";
import {useSelector} from "react-redux";
import {fetchCurrentWeatherSelector} from "../../BLL/Weather/weather.selector";
import moment from "moment";

const OtherInfo = () => {

    const {
        sunset,
        sunrise,
        wind_speed,
        feels_like,
        humidity,
        visibility,
        clouds ,
        pressure
    } = useSelector(fetchCurrentWeatherSelector);

    const sunSet = moment(sunset * 1000, true).format("k:kk");
    const sunRise = moment(sunrise * 1000).format("hh:mm ");
    const windSpeed = wind_speed + "ms";
    const windFeelsLike = feels_like + "ms";
    const visibilityWeather = visibility / 1000 + "km"
    const humidityWeather = humidity + "%"
    const cloudiness = clouds + "%"
    const pressureWeather = pressure + " pHa"
    return (<View
            style={{
                height: 360,
                alignItems: "center",
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: "rgba(220,220,220,0.71)",
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
                    titleLeft={"CLOUDINESS"}
                    titleRight={"PRESSURE"}
                    valueLeft={cloudiness}
                    valueRight={pressureWeather}
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


  return (
      <View
          style={{
              justifyContent: "center",
              margin: 5,

              alignItems: "center",
              flexDirection: "row",
              width: "95%",
              borderBottomWidth: 1,
              borderColor: "rgba(220,220,220,0.71)",
          }}
      >
          <View style={{width: "50%", marginLeft: 50}}>
              <Text style={{color: "rgba(255,255,255,0.87)", fontSize: 12}}>{titleLeft}</Text>
              <Text style={{color: "rgb(255,255,255)", fontSize: 28}}>{valueLeft}</Text>
          </View>
          <View style={{width: "50%",}}>
              <Text style={{color: "rgba(255,255,255,0.87)", fontSize: 12}}>{titleRight}</Text>
              <Text style={{color: "rgb(255,255,255)", fontSize: 28}}>{valueRight}</Text>
          </View>
      </View>
  );
};
