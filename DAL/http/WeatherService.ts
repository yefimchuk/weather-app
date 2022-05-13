import axios from "axios";


class WeatherService {
    FetchCoordinatesHandler(city: any) {

        return axios.get(``, {
            params: {
                q: city,
                limit: 5,

            }

        });
    }

    FetchWeatherByCoordinatesHandler({lat, lon}: any) {
        return axios.get('', {
            params: {
                lat: lat,
                lon: lon,
                exclude: "hourly",
                units: "metric"
            }
        })
    }

}

const weatherServiceInstance = new WeatherService()
export default weatherServiceInstance;