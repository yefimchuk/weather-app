import {ImageBackground, StyleSheet} from "react-native";
import {Provider} from "react-redux";
import store from "./BLL/store";
// @ts-ignore
import blueSky from "../weather-app/assets/blue-sky.jpg";
// @ts-ignore
import night from "../weather-app/assets/night.jpg";
// @ts-ignore
import sunset from "../weather-app/assets/sunset-sky.jpg";
import axios from "axios";
import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import CurrentForecast from "./UI/Components/CurrentForecast";
import moment from "moment";
import config from "./config";
let {API_KEY} = config
export default function App() {
    axios.interceptors.request.use((config) => {
        config.baseURL = "https://api.openweathermap.org/data/2.5/";
        config.params.appid = API_KEY
        return config;
    });


    let imgBackground = blueSky;
    if (
        parseInt(moment(Date.now()).format("k")) >= 8 &&
        parseInt(moment(Date.now()).format("k")) < 16
    ) {
        imgBackground = blueSky;
    } else if (
        parseInt(moment(Date.now()).format("k")) >= 16 &&
        parseInt(moment(Date.now()).format("k")) < 22
    ) {
        imgBackground = sunset;
    } else {
        imgBackground = night;
    }
//dd
    return (
        <Provider store={store}>
            <NavigationContainer>
                <ImageBackground
                    source={imgBackground}
                    style={styles.bg}
                    blurRadius={5}
                >
                    <CurrentForecast/>
                </ImageBackground>
            </NavigationContainer>
        </Provider>
    );
}
const styles = StyleSheet.create({
    bg: {
        flex: 1,
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
});
