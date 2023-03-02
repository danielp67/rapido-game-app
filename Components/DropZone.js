import React from 'react';
import SortedSlot from "./SortedSlot";
import {StyleSheet, View} from "react-native";

const DropZone = (props) => {

    const {setSelectedSlot, droppedCard} = props

    return (
        <View style={styles.dropZone}>
                {
                    droppedCard.map((mapping, index) => {
                      return(
                        <SortedSlot
                            key={index}
                            slotIndex={index}
                            setSelectedSlot={setSelectedSlot}
                            droppedCard={droppedCard[index]}
                        />
                      )
                    })
                }

        </View>
    )

}

const styles = StyleSheet.create({
    dropZone: {
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        flexWrap: 'wrap',
        backgroundColor: '#585858',

    },
});

export default DropZone;