import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const SortedSlot = (props) => {

    const {droppedCard} = props

        return (
                <View style={styles(droppedCard[0]).sortedSlot}>
                    <Text className="t my-auto fs-5 fw-bold">{droppedCard[0].value}</Text>

                </View>
        )


}


const styles = (props) => StyleSheet.create({

    sortedSlot:{
        display:'flex',
        width: '6%',
        height: '50px',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: props.suit,
        border:'0.1rem solid',
        borderRadius:'0.3rem',
        margin: '15px'
    }
});

export default SortedSlot;