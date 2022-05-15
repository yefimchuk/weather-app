import React from "react";
import {Button, StyleSheet, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {fetchCoordinatesHandler, fetchWeatherByCoordinatesHandler,} from "./BLL/Weather/weather.slice";
import {fetchWeatherDataSelector} from "./BLL/Weather/weather.selector";

let Test = () => {
    let dispatch = useDispatch();
    let onClick = async () => {

        let response = await dispatch(fetchCoordinatesHandler("kyiv"));
        dispatch(fetchWeatherByCoordinatesHandler(response.payload));
    };
    let data = useSelector(fetchWeatherDataSelector)
    return (

        <View style={styles.button}>
            <Button title={"weather" + data} onPress={onClick}/>

        </View>

    );
};
export default Test;
const styles = StyleSheet.create({
    button: {

        backgroundColor: "#ff1b1b",

    },
});
