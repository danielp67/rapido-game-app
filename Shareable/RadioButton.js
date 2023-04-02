import React from 'react';
import {StyleSheet, Text, Pressable, View} from "react-native";

const RadioButton = (props) => {

    const {settings, name, value, onChange, label} = props

    return (
        <View className="form-check">
            <Pressable
                style={settings[name] === value ? styles.selected : styles.unselected}
                className="form-check-input" type="radio" name={name}
                   id={name} value={value} onPress={(e) => onChange({name:name,value:value,checked: settings[name] === value})}
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
        textAlign: 'center',

    },

    option: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    unselected: {
        backgroundColor: '#adb5bd',
        margin: 5,
        padding: 5,
        textAlign: 'center',

    },
    selected: {
        backgroundColor: '#0d6efd',
        margin: 5,
        padding: 5,
        textAlign: 'center',
    },
});

export default RadioButton;