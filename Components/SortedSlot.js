import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const SortedSlot = (props) => {

    const {droppedCard} = props

        return (
                <View style={styles(droppedCard[0]).sortedSlot}>
                    <Text>{droppedCard[0].value}</Text>

                </View>
        )


}


const styles = (props) => StyleSheet.create({

    sortedSlot:{
        display:'flex',
        width: 30,
        height: 50,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: props.suit,
        border:'solid',
        borderRadius: 3,
        margin: 10
    }
});

export default SortedSlot;