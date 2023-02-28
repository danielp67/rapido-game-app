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
        width: '25px',
        height: '40px',
        backgroundColor: props.suit,
        border:'0.1rem solid',
        borderRadius:'0.3rem',
        margin: '5px',
        justifyContent: 'center',
        alignItems:'center',
    },

    playerCard:{
        width: '50px',
        height: '80px',
        backgroundColor: props.suit,
        border:'0.1rem solid',
        borderRadius:'0.3rem',
        margin: '5px',
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