import React, {useContext} from 'react';
import Player from "./Player";
import {ParamsContext} from "../Context/ParamsContext";

const Bots = (props) => {

    const {droppedCard, setDroppedCard, gameStop, setScore, stop, pause, start, level, loading, settings, gamePause} = props
    const {params} = useContext(ParamsContext)

    return (
        <>
            {params.color.slice(0,settings.nbPlayer-1).map((color, index) => {


                    return (
                        <Player
                            key={index}
                            realPlayer={false}
                            playerIndex={index + 2}
                            color={color}
                            droppedCard={droppedCard}
                            setDroppedCard={setDroppedCard}
                            gameStop={gameStop}
                            start={start}
                            pause={pause}
                            stop={stop}
                            setScore={setScore}
                            level={level}
                            loading={loading}
                            gamePause={gamePause}
                        />

                    )
                }
            )}
        </>)

};


export default Bots;