import React from 'react';
import {Text, View} from "react-native";

const HomeTab = (props) => {

    const {scoring, start, winner, winnerGame, winnerMatch} = props

    return (
            <View>

                <Text className="card-title fw-bold">Rapido game</Text>
                {!start ?
                    <View>
                    <Text>Bienvenue dans Rapido Game !</Text>
                    <Text>Commencer une nouvelle partie ?</Text>
                    </View>
                    : <View>
                        <Text>
                        Manche n°{scoring.partNb}</Text>
                    <Text>   Gagnant de la manche : joueur n°{winnerMatch.playerIndex}
                    </Text>
                    </View>
                }

                {scoring.partNb > 0 && winner ?
                    <View>
                    <Text>
                        Le jeu est fini, le vainqueur est le joueur n°{winnerGame.playerIndex}</Text>
                    <Text>   Commencer une nouvelle partie ?
                    </Text>
                    </View>
                    : null
                }

            </View>
            )
}

export default HomeTab;