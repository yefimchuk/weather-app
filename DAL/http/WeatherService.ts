import axios from "axios";

class WeatherService {
  FetchCoordinatesHandler(city: any) {
    return axios.get(`weather`, {
      params: {
        q: city,
      },
    });
  }

  FetchWeatherByCoordinatesHandler({ lat, lon }: any) {
    return axios.get(`onecall`, {
      params: {
        lat: lat,
        lon: lon,
        exclude: "",
        units: "metric",
      },
    });
  }
}

const weatherServiceInstance = new WeatherService();
export default weatherServiceInstance;
