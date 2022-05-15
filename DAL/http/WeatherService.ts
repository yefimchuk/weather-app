import axios from "axios";

class WeatherService {
  FetchCoordinatesHandler(city: any) {
    return axios.get(`weather`, {
      params: {
        q: city,
        units: "metric",
      },
    });
  }

  FetchWeatherByCoordinatesHandler({ lon, lat }: any) {

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
