import React from 'react';
import Card from "./Card";

const PlayerSlot = (props) => {

    const {slotName, deck, setCurrentCard, setCardOnDbClick,  drop, realPlayer} = props

        return (
                <Card
                    card={deck[slotName][0]}
                    realPlayer={realPlayer}
                    slotName={slotName}
                    setCurrentCard={setCurrentCard}
                    setCardOnDbClick={setCardOnDbClick}
                    drop={drop}
                />
        )



}


export default PlayerSlot;