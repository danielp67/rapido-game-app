import React from 'react';
import {Text, View} from "react-native";

const HomeTab = (props) => {

    const {scoring, start, winner, winnerGame, winnerMatch} = props

    return (
        <>
            <View className="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                 aria-labelledby="home-tab" tabIndex="0">

                <Text className="card-title fw-bold">Rapido game</Text>
                {!start ?
                    <Text>
                        Bienvenue dans Rapido Game !<br/>
                        Commencer une nouvelle partie ?
                    </Text>

                    : <Text>
                        Manche n°{scoring.partNb}<br/>
                        Gagnant de la manche : joueur n°{winnerMatch.playerIndex}
                    </Text>
                }

                {scoring.partNb > 0 && winner ?

                    <Text>
                        Le jeu est fini, le vainqueur est le joueur n°{winnerGame.playerIndex}<br/>
                        Commencer une nouvelle partie ?
                    </Text>

                    : null
                }

            </View>

        </>
    )
}

export default HomeTab;