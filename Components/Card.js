import React from 'react';
import {StyleSheet} from "react-native";

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
            <div
                style={styles(card).playerCard}
                onTouchEndCapture={(e) => doubleClick(e)}
            >
                <p
                    style={styles(card).cardValue}
                >{card.value}</p>
            </div>

        )
    }
    else{
        return (
            <div
                style={styles(card).autoPlayerCard}
            >
                <p
                    style={styles(card).cardValue}
                >{card.value}</p>
            </div>

        )
    }

}


const styles = (props) => StyleSheet.create({

    autoPlayerCard:{
        width: '30px',
        height: '50px',
        backgroundColor: props.suit,
        border:'0.1rem solid',
        borderRadius:'0.3rem',
        margin: '5px'

    },

    playerCard:{
        width: '50px',
        height: '80px',
        backgroundColor: props.suit,
        border:'0.1rem solid',
        borderRadius:'0.3rem',
        margin: '5px'

    },

    cardValue:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    }
    });


export default Card;