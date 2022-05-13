import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux'
import store from "./BLL/store";
import Test from "./test.";
import axios from "axios";


export default function App() {
    axios.interceptors.request.use((config) => {

        config.baseURL = "https://api.openweathermap.org/data/2.5/weather";
        config.params.appid = "0f577827aaa34d864bd29dd15ee0e2b5"
        return config;
    });
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <Test/>
                <StatusBar style="auto"/>
            </View>
        </Provider>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});