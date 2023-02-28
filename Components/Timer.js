import React, {useEffect} from "react";
import {Text, View} from "react-native";

const Timer = (props) => {

    const {time, setTime, stop, pause, timerOn} = props

    const refreshTime = () => {
        let tmpTime = time

         tmpTime++
        setTime(tmpTime++)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if(!stop && !pause && timerOn)
            {
                refreshTime()
            }
        }, 1000);

        return () => clearTimeout(timer);
    });


    return (
        <View className="row">
           <Text className="col-8 fs-3">Rapido Game  </Text>
            <Text className="col-4 fs-3 text-end">
            {timerOn ? " " + time +" s": " - "}
            </Text>
        </View>
    )

};


export default Timer;