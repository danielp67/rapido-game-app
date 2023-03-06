import React from 'react';
import {StyleSheet, Text, Pressable, View} from "react-native";

const RadioButton = (props) => {

    const {settings, name, value, onChange, label} = props

    return (
        <View className="form-check">
            <Pressable className="form-check-input" type="radio" name={name}
                   id={value} value={value} onPress={() => console.log("value")}
                   checked={settings[name] === value}>

            <Text style={styles.text}>
                {label}
            </Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        color: 'white',

    },
});

export default RadioButton;