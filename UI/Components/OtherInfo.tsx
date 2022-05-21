import React from "react";
import {Text, View} from "react-native";
import {useSelector} from "react-redux";
import {fetchCurrentWeatherSelector} from "../../BLL/Weather/weather.selector";

const OtherInfo = () => {
    const currentWeatherData = useSelector(fetchCurrentWeatherSelector);
    console.log(currentWeatherData);
    return (
        <View>
<ItemInfo info={currentWeatherData.sunset}/>
        </View>
    );
};
export default OtherInfo;

export const ItemInfo = ({info}: { info: string | number }) => {
    return (
        <View
            style={{
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: "rgba(220,220,220,0.71)",
            }}
        >
            <Text>adad</Text>
        </View>
    );
};
