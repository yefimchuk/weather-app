import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoordinatesHandler } from "../../BLL/Weather/weather.slice";

const ForecastSearch = () => {
  let dispatch = useDispatch();
  const [city, SetCity] = React.useState("");

  const findCity = () => {
    dispatch(fetchCoordinatesHandler(city));
  };
  return (
    <View style={styles.forecastSearch}>


      <TextInput
        onChangeText={SetCity}
        onSubmitEditing={findCity}
        style={styles.forecastSearch__input}
        placeholder="Weather in you city"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  forecastSearch__input: {
    width: "92%",
    height: 60,
    borderRadius: 9,
    fontSize: 20,
    padding: 10,
    backgroundColor: "white",
  },

  forecastSearch: {
    flex: .2,
    justifyContent: "center",
    alignItems: "center",
  },
  forecastSearch__textFlex: {
    width: "92%",
    height: 40,
  },
  forecastSearch__text: {
    color: "#FFFFFF",
    fontSize: 19,
  },
});

export default ForecastSearch;
