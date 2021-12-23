import axios from "axios";

class WeatherService {
    FindByCity({city, limit}: any) {
        return axios.get(`q=${city}`, );
    }

}

const weatherServiceInstance = new WeatherService()
export default weatherServiceInstance;