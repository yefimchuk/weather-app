import axios from "axios";

import config from "../../config";


class WeatherService {
  FetchCoordinatesHandler(city: any) {
    return axios.get(`weather`, {
      params: {
        q: city,
        units: "metric",
        appid: config.API_KEY
      },
    });
  }

  FetchWeatherByCoordinatesHandler({ lon, lat }: any) {

    return axios.get(`onecall`, {
      params: {
        lat: lat,
        lon: lon,
        units: "metric",
        appid: config.API_KEY
      },
    });
  }
}

const weatherServiceInstance = new WeatherService();
export default weatherServiceInstance;
