import React from 'react';
import SortedSlot from "./SortedSlot";
import {StyleSheet} from "react-native";

const DropZone = (props) => {

    const {setSelectedSlot, droppedCard} = props

    return (
        <div style={styles.dropZone}>
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

        </div>
    )

}

const styles = StyleSheet.create({
    dropZone: {
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
        width:'75%',

    },
});

export default DropZone;