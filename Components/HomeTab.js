import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const HomeTab = (props) => {

    const {scoring, start, winner, winnerGame, winnerMatch} = props

    return (
            <View>

                <Text style={styles.textBold}>Rapido game</Text>
                {!start ?
                    <View>
                    <Text style={styles.text}>Bienvenue dans Rapido Game !</Text>
                    <Text style={styles.text}>Commencer une nouvelle partie ?</Text>
                    </View>
                    : <View>
                        <Text style={styles.text}>
                        Manche n°{scoring.partNb}</Text>
                    <Text style={styles.text}>   Gagnant de la manche : joueur n°{winnerMatch.playerIndex}
                    </Text>
                    </View>
                }

                {scoring.partNb > 0 && winner ?
                    <View>
                    <Text style={styles.text}>
                        Le jeu est fini, le vainqueur est le joueur n°{winnerGame.playerIndex}</Text>
                    <Text style={styles.text}>   Commencer une nouvelle partie ?
                    </Text>
                    </View>
                    : null
                }

            </View>
            )
}

const styles = StyleSheet.create({
    text: {
        color:'white',

    },
    textBold: {
        color:'white',
        fontSize:20,
        fontWeight:"bold"
    },
});

export default HomeTab;