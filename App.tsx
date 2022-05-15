import { ImageBackground, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import store from "./BLL/store";
// @ts-ignore
import bgImg from "../weather-app/assets/backGround.png";
import axios from "axios";
import { NavigationContainer } from "@react-navigation/native";
import ForecastSearch from "./UI/Components/ForecastSearch";
import CurrentForecast from "./UI/Components/CurrentForecast";

export default function App() {
  axios.interceptors.request.use((config) => {
    config.baseURL = "https://api.openweathermap.org/data/2.5/";
    config.params.appid = "0f577827aaa34d864bd29dd15ee0e2b5";
    return config;
  });
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ImageBackground
          source={bgImg}
          style={{ width: "100%", height: "100%" }}
        >
          <ForecastSearch />
          <CurrentForecast />
        </ImageBackground>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  text: {},
});
