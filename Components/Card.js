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
                <p className="my-auto fs-4 fw-bold">{card.value}</p>
            </div>

        )
    }
    else{
        return (
            <div
                style={styles(card).autoPlayerCard}
            >
                <p className="my-auto">{card.value}</p>
            </div>

        )
    }

}


const styles = (props) => StyleSheet.create({

    autoPlayerCard:{
            width: '30px',
            height: '50px',
        flex:1,
        backgroundColor: props.suit,
        border:'0.1rem solid',
        borderRadius:'0.3rem',
        },

    playerCard:{
        width: '50px',
        height: '80px',
        flex:1,
        backgroundColor: props.suit,
        border:'0.1rem solid',
        borderRadius:'0.3rem',
    }
    });


export default Card;