# weather-app

#### Tech Used

- React Native
-  Expo
-  Redux-toolkit
-  Axios
-  Moment

## The UI


<img src="https://i.ibb.co/NywJ4GG/IMG-5713.png" alt="The User Interface" width="400"/>


## How To Run The App in an IOS Simulator

#### Step 1: 
- Clone the repo
- Open it in your favorite editor
- Open a terminal in your editor and run `yarn install`

#### Step 2: 
- Head over to https://openweathermap.org/api/one-call-api to get an API key. (You will have to sign up)
- Create a `.env` file in the root folder and put your keys in the file like this: 

```
API_KEY=YourOpenWeatherKeyHere
```

#### Step 3:

- Download xcode 
- In the menu bar go to Xcode -> Open Developer Tools -> Simulator

#### Step 4: 

- In your terminal run `yarn start`. 
- In the browser, click on `Run on IOS Simulator`.

## Dependencies 

```json
  "dependencies": {
    "@expo/webpack-config": "~0.16.2",
    "@reduxjs/toolkit": "^1.8.1",
    "axios": "^0.27.2",
    "expo": "~45.0.0",
    "expo-optimize": "^0.2.16",
    "expo-status-bar": "~1.3.0",
    "faker": "^5.5.3",
    "moment": "^2.29.3",
    "prettier": "^2.6.2",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "react-native": "0.68.2",
    "react-native-fast-image": "^8.5.11",
    "react-native-safe-area-context": "4.2.4",
    "react-native-screens": "~3.11.1",
    "react-native-web": "0.17.7",
    "react-redux": "^8.0.1",
    "redux-devtools-extension": "^2.13.9",
    "redux-thunk": "^2.4.1",
    "sharp-cli": "^1.15.0",
    "webpack-dev-server": "~3.11.0"
  },
  
  ```
