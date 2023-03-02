import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";

const RadioButton = (props) => {

    const {settings, name, value, onChange, label} = props

    return (
        <View className="form-check">
            <TouchableOpacity className="form-check-input" type="radio" name={name}
                   id={value} value={value} onPress={() => onChange}
                   checked={settings[name] === value}
            />
            <Text className="form-check-label" htmlFor={value}>
                {label}
            </Text>
        </View>
    )
}

export default RadioButton;