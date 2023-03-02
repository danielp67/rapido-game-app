import React, {useEffect} from "react";
import {StyleSheet, Text, View} from "react-native";

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
        <View style={styles.timer}>
           <Text style={styles.timer}>Rapido Game</Text>
            <Text style={styles.timer}>
            {timerOn ? " " + time +" s": " - "}
            </Text>
        </View>
    )

};

const styles = StyleSheet.create({
    timer: {
        fontSize: 20,
        color: '#ffffff',
        width: '100%',
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
     //   justifyContent:'between',
        paddingHorizontal: 50,
        paddingVertical: 10
    },
})


export default Timer;