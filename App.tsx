import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from "axios";

export default function App() {
    axios.interceptors.request.use((config) => {
        config.baseURL = "http://api.openweathermap.org/geo/1.0/direct";
        config.headers = {
            "API-KEY": "0f577827aaa34d864bd29dd15ee0e2b5",
        };
        config.withCredentials = true;
        return config;
    });
  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: 40,
        color: 'black\'',
      }}>привет дед!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',

    justifyContent: 'center',
  },
});
