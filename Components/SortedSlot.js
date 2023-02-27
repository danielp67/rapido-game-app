import React from 'react';
import {StyleSheet} from "react-native";

const SortedSlot = (props) => {

    const {droppedCard} = props

        return (
                <div style={styles(droppedCard[0]).sortedSlot}>
                    <p className="t my-auto fs-5 fw-bold">{droppedCard[0].value}</p>

                </div>
        )


}


const styles = (props) => StyleSheet.create({

    sortedSlot:{
        display:'flex',
        width: '30px',
        height: '50px',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: props.suit,
        border:'0.1rem solid',
        borderRadius:'0.3rem',
        margin: '5px'
    }
});

export default SortedSlot;