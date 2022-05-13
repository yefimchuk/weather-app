import React from "react";
import {Button, View} from "react-native";
import {useDispatch} from "react-redux";
import {fetchCoordinatesHandler, fetchWeatherByCoordinatesHandler} from "./BLL/Weather/weather.slice";
import {NavigationContainer} from '@react-navigation/native';

let Test = () => {
    let dispatch = useDispatch()
    let onClick = async () => {

        let response = await dispatch(fetchCoordinatesHandler("belogorodka"))
        dispatch(fetchWeatherByCoordinatesHandler(response.payload))
    }
    return (
        <NavigationContainer> <View>
            <Button title={"Hello"} onPress={onClick}/>
        </View></NavigationContainer>
    )
}
export default Test