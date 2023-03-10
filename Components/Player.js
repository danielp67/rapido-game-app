import React, {useContext, useEffect, useState} from 'react';
import NextButton from "./NextButton";
import PlayerSlot from "./PlayerSlot";
import ResumeMenu from "./ResumeMenu";
import {ParamsContext} from "../Context/ParamsContext";
import {StyleSheet, Text, View} from "react-native";

const Player = (props) => {

    const {
        realPlayer,
        playerIndex,
        color,
        selectedSlot,
        setSelectedSlot,
        droppedCard,
        setDroppedCard,
        start,
        stop,
        pause,
        gameStop,
        setScore,
        level,
        loading,
        gamePause,
        isVisible
    } = props
    const {params} = useContext(ParamsContext)
    const [currentCard, setCurrentCard] = useState({})
    const [slotName, setSlotName] = useState({})
    const [playerTime, setPlayerTime] = useState(0)
    const [scoring, setScoring] = useState(false)
    const [initPlayer, setInitPlayer] = useState(false)
    const [deck, setDeck] = useState(
        {
            //     initialDeck: [],
            //       reserveDeck: [],
            reserveSlot: [],
            rapidoSlot: [],
            tmpSlot1: [],
            tmpSlot2: [],
            tmpSlot3: []
        }
    )

    const initDeck = () => {
        let tmpDeck = []
// create a deck of cards
        for (let i = 0; i < params.suits.length; i++) {
            for (let x = 0; x < params.values.length; x++) {
                let card = {value: params.values[x], suit: params.suits[i]};
                tmpDeck.push(card);
            }
        }

// shuffle the cards
        for (let i = tmpDeck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let tmp = tmpDeck[i];
            tmpDeck[i] = tmpDeck[j];
            tmpDeck[j] = tmp;
        }


        let tmpReserveSlot = [...tmpDeck]
        tmpReserveSlot.splice(0, 13)

        //    let initalDeck = tmpDeck
        let reserveSlot = tmpReserveSlot
        let rapidoSlot = tmpDeck.slice(0, 10)
        let tmpSlot1 = tmpDeck.slice(10, 11)
        let tmpSlot2 = tmpDeck.slice(11, 12)
        let tmpSlot3 = tmpDeck.slice(12, 13)

        setDeck(
            {
                //  initialDeck: initalDeck,
                // reserveDeck: [],
                reserveSlot: reserveSlot,
                tmpSlot1: tmpSlot1,
                tmpSlot2: tmpSlot2,
                tmpSlot3: tmpSlot3,
                rapidoSlot: rapidoSlot,
            }
        )

    }

    const nextCard = () => {
        let tmpDeck = {...deck}
        let tmp = tmpDeck.reserveSlot.shift()
        tmpDeck.reserveSlot.push(tmp)
        setDeck(tmpDeck)
    }

    const setCard = ({card, slotName}) => {
        setCurrentCard(card)
        setSlotName(slotName)
    };

    const setCardOnDbClick = (props) => {

        const {card, slotName} = props
        let tmpDroppedCard = [...droppedCard]
        let currentCard = card

        for (let i = 0; i < tmpDroppedCard.length; i++) {
            let previousCard = tmpDroppedCard[i][0]

            if (checkCard(previousCard, currentCard)) {

                dropCard(slotName, currentCard, tmpDroppedCard, i)
                break;
            }

        }
    }


    const drop = () => {
        let tmpDroppedCard = [...droppedCard]
        if (selectedSlot !== "") {
            let previousCard = tmpDroppedCard[selectedSlot][0]

            if (checkCard(previousCard, currentCard)) {

                dropCard(slotName, currentCard, tmpDroppedCard, selectedSlot)
                setSelectedSlot("")

            }
        }
    }


    const checkCardDroppable = () => {

        let isCardDropped = false
        let tmpDroppedCard = [...droppedCard]

        for (let i = 0; i < tmpDroppedCard.length; i++) {
            let previousCard = tmpDroppedCard[i][0]

            for (let j = 0; j < params.playerSlot.length; j++) {

                if(deck[slotName]!==''){
                let slotName = params.playerSlot[j]
                let currentCard = deck[slotName][0]

                if (checkCard(previousCard, currentCard)) {

                    isCardDropped = true
                    dropCard(slotName, currentCard, tmpDroppedCard, i)
                }
                }
            }
        }

        if (!isCardDropped) {
            nextCard()
        }
    }

    const sendScore = () => {
        let tmpDeck = {...deck}
     //   console.log(tmpDeck.rapidoSlot[0], playerIndex)
        let score = 40 - tmpDeck.reserveSlot.length
            - (tmpDeck.tmpSlot1[0].value !== "X" ? tmpDeck.tmpSlot1.length : 0)
            - (tmpDeck.tmpSlot2[0].value !== "X" ? tmpDeck.tmpSlot2.length : 0)
            - (tmpDeck.tmpSlot3[0].value !== "X" ? tmpDeck.tmpSlot3.length : 0)
            - (tmpDeck.rapidoSlot[0].value !== "X" ? tmpDeck.rapidoSlot.length : 0)
            - (tmpDeck.rapidoSlot[0].value !== "X" ? tmpDeck.rapidoSlot.length*2 : 0)

        setScore({playerIndex: playerIndex, currentScore: score})
    }

    function dropCard(slotName, currentCard, tmpDroppedCard, i) {

        let tmpDeck = {...deck}
        tmpDeck[slotName].shift()


        if (slotName === "tmpSlot1" || slotName === "tmpSlot2" || slotName === "tmpSlot3") {
            let tmp = tmpDeck["rapidoSlot"].shift()
            tmpDeck[slotName].unshift(tmp)

        }

        if (tmpDeck["rapidoSlot"].length === 0) {
            //console.log("winner")
            tmpDeck["rapidoSlot"].unshift({value: "X", suit: "secondary"})
            gameStop(playerIndex)
        }


        setDeck(tmpDeck)
        tmpDroppedCard[i].unshift(currentCard)
        setDroppedCard(tmpDroppedCard)
    }


    function checkCard(previousCard, currentCard) {
        return (previousCard.value + 1 === currentCard.value &&
            previousCard.suit === currentCard.suit) ||
            (previousCard.value === 0 && currentCard.value === 1);
    }



    if (!initPlayer) {
        initDeck()
        setInitPlayer(true)
        setScoring(true)


    }

    if (stop && loading && scoring) {
        sendScore()
        setScoring(false)

    }

    const refreshPlayerTime = () => {
        let tmpTime = playerTime

        tmpTime += level
        setPlayerTime(tmpTime)
    }

    useEffect(() => {
        const playerSpeed = setTimeout(() => {
            if (!realPlayer && !pause && !stop) {
                checkCardDroppable()
                refreshPlayerTime()
            }
        }, level);

        return () => clearTimeout(playerSpeed);
    },[playerTime, pause]);


    return (
        <View style={styles(color).playerSlot} >


            {params.playerSlot.map((mapping, index) => {
                return (

                    <View key={index} style={styles(color).slot}>
                        <PlayerSlot
                            realPlayer={realPlayer}
                            slotName={mapping}
                            deck={deck}
                            setCurrentCard={setCard}
                            setCardOnDbClick={setCardOnDbClick}
                            drop={drop}
                        />
                        {realPlayer && mapping === "reserveSlot" ? <NextButton
                            nextCard={nextCard}
                        /> : null}

                        <Text>
                            {mapping === "reserveSlot" || mapping === "rapidoSlot" ? deck[mapping].length : " "}
                        </Text>

                            {mapping === "tmpSlot2" && realPlayer ? <ResumeMenu
                                gamePause={gamePause}
                                isVisible={isVisible}
                            /> : null}

                    </View>
                )
            })}

            <Text>
                {playerIndex}
            </Text>

        </View>
    )

}



const styles = (props) => StyleSheet.create({
    playerSlot: {
        display:'flex',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'start',
        backgroundColor:props
    },
    slot: {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:props

    },
});

export default Player;