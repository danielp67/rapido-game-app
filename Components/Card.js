import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const Card = (props) => {
    const {setCardOnDbClick, slotName, card, realPlayer} = props


    const doubleClick = (e) => {
        setCardOnDbClick({card:card, slotName:slotName})
    };

    let className=""
    if(slotName==="reserveSlot")
    {
        className="border border-dark border-2"
    }
    if(slotName==="rapidoSlot")
    {
        className="border border-secondary border-2"
    }


    if(realPlayer) {
        return (
            <View
                style={styles(card).playerCard}
                onTouchEndCapture={(e) => doubleClick(e)}
                onDoubleClick={(e) => doubleClick(e)}
            >
                <Text
                    style={styles(card).cardValue}
                >{card.value}</Text>
            </View>

        )
    }
    else{
        return (
            <View
                style={styles(card).autoPlayerCard}
            >
                <Text
                    style={styles(card).cardValue}
                >{card.value}</Text>
            </View>

        )
    }

}


const styles = (props) => StyleSheet.create({

    autoPlayerCard:{
        width: 30,
        height: 50,
        backgroundColor: props.suit,
        border:'solid',
        borderRadius:3,
        margin: 5,
        justifyContent: 'center',
        alignItems:'center',
    },

    playerCard:{
        width: 50,
        height: 80,
        backgroundColor: props.suit,
        border:'solid',
        borderRadius:3,
        margin: 5,
        justifyContent: 'center',
        alignItems:'center',

    },

    cardValue:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    }
    });


export default Card;