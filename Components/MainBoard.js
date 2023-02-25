import React, {useContext, useState} from 'react';
import Bots from "./Bots";
import DropZone from "./DropZone";
import Timer from "./Timer";
import Player from "./Player";
import MainMenu from "./MainMenu";
import {ScoreContext} from "../Context/ScoreContext";

const MainBoard = () => {

    const [selectedSlot, setSelectedSlot] = useState("")
    const [droppedCard, setDroppedCard] = useState([])
    const [stop, setStop] = useState(false)
    const [pause, setPause] = useState(false)
    const [start, setStart] = useState(false)
    const [loading, setLoading] = useState(false)
    const [time, setTime] = useState(0)
    const {score, partNb} = useContext(ScoreContext)
    const [scoring, setScoring] = useState({score: [...score], partNb: partNb})
    let tmpScoring = []
    let tmpScoring2 = [...score]
    const [settings, sendSettings] = useState(
        {
            nbPlayer: "4",
            level: "1000",
            switchCountScore: true,
            switchTimer: true,
            switchDarkMode: true
        }
    )
    let count = 0

    const initDropZone = () => {
        let tmpDroppedCard = []
        for (let i = 0; i < 4 * settings.nbPlayer; i++) {
            tmpDroppedCard.push([{value: 0, suit: "secondary"}])
        }
        setDroppedCard(tmpDroppedCard)

    }

    const setSlot = (props) => {
        setSelectedSlot(props)
    };

    const drop = (props) => {
        setDroppedCard(props)
    }


    const reloadGame = (props) => {
      //  console.log(props)
        setPause(false)
        setStop(false)
        setStart(false)
        setLoading(false)
        setScoring({score: tmpScoring2, partNb: 0})
    }

    const gameStop = (props) => {
      //  console.log("player win :" + props)
        setStop(true)
        clearTimeout()
    }

    const gamePause = (props) => {
        if(props === "quit")
        {
            reloadGame()
        }
        else{
            setPause(props)
            clearTimeout()
        }
    }

    const setScore = (props) => {
        const {playerIndex, currentScore} = props
        tmpScoring[playerIndex - 1] = {...scoring.score[playerIndex - 1]}
        tmpScoring[playerIndex - 1] = {
            playerIndex: playerIndex,
            currentScore: currentScore,
            total: tmpScoring[playerIndex - 1].total ? tmpScoring[playerIndex - 1].total : 0
        }
        count++
        if (tmpScoring.length === settings.nbPlayer * 1 && loading && count === settings.nbPlayer * 2) {

            tmpScoring = tmpScoring.map((mapping, index) => {
                return (
                    {
                        playerIndex: mapping.playerIndex,
                        currentScore: mapping.currentScore,
                        total: mapping.total + mapping.currentScore
                    }
                )
            })

            count = 0
            scoring.partNb++
            setScoring({score: tmpScoring, partNb: scoring.partNb})
            setLoading(false)


        }
    }

    const setSettings = (props) => {
        sendSettings(props)
    }

    const setReloading = () => {
        setStop(false)
        setPause(false)
        setStart(true)
        setSelectedSlot("")
        setLoading(true)
        setTime(0)
        initDropZone()
    }

    const updateTime = (props) => {
        setTime(props)
    }


    if (loading) {

        return (
            <>
                <ScoreContext.Provider value={{score: scoring, partNb: partNb}}>
                    <div className="row">
                        <div className="col-12 col-sm-8 col-md-5 col-xl-4 offset-md-2 offset-xl-3">
                            <Timer
                                start={start}
                                pause={pause}
                                time={time}
                                setTime={updateTime}
                                stop={stop}
                                timerOn={settings.switchTimer}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-sm-8 col-md-5 col-xl-4 offset-md-2 offset-xl-3">
                            <DropZone
                                setSelectedSlot={setSlot}
                                droppedCard={droppedCard}
                            />
                            <Player
                                realPlayer={true}
                                playerIndex={1}
                                color={"secondary"}
                                selectedSlot={selectedSlot}
                                setSelectedSlot={setSelectedSlot}
                                droppedCard={droppedCard}
                                setDroppedCard={drop}
                                gameStop={gameStop}
                                start={start}
                                pause={pause}
                                stop={stop}
                                setScore={setScore}
                                level={parseInt(settings.level)}
                                loading={loading}
                                gamePause={gamePause}

                            />
                        </div>

                        <div className="col-4 col-md-3 col-xl-2 d-none d-sm-block">
                            <Bots
                                start={start}
                                stop={stop}
                                pause={pause}
                                droppedCard={droppedCard}
                                setDroppedCard={drop}
                                gameStop={gameStop}
                                setScore={setScore}
                                level={parseInt(settings.level)}
                                loading={loading}
                                settings={settings}
                                gamePause={gamePause}

                            />
                        </div>
                    </div>
                </ScoreContext.Provider>

            </>
        )
    } else {

        return (
            <MainMenu
                settings={settings}
                setSettings={setSettings}
                scoring={scoring}
                setReloading={setReloading}
                reloadGame={reloadGame}
                start={start}
            />
        )
    }
}


export default MainBoard;