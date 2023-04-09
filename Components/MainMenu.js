import React from 'react';
import SettingsTab from "./SettingsTab";
import ScoringTab from "./ScoringTab";
import TabGroup from "../Shareable/TabGroup";
import {ThemeContext} from "../Context/ThemeContext";
import HomeTab from "./HomeTab";
import {Button, StyleSheet, Text, View} from "react-native";

const MainMenu = (props) => {

    const {scoring, settings, setSettings, setReloading, reloadGame, start, selectedTab, setSelectedTab} = props

    let winnerGame = [...scoring.score]
    let winnerMatch = [...scoring.score]

    let winner = false

    winnerMatch.sort(function (a, b) {
        return b.currentScore - a.currentScore
    })

    winnerGame.sort(function (a, b) {
        return b.total - a.total
    })

    if (winnerGame[0].total >= 100 || !settings.switchCountScore) {
        winner = true

    }

    if (!start) {
        winner = false

    }

    return (
        <>
            <ThemeContext.Consumer>
                {({theme}) => (
                    <View className={"overlay row bg-secondary vh-100"}>
                        <View>
                            <View>

                            <TabGroup
                                setSelectedTab={setSelectedTab}
                                start={start}
                                      style={styles.tabGroup}/>
                            </View>
                            <View>
                                <View style={styles.homeTab}>
                                    {selectedTab === 'home' ?
                                <HomeTab
                                    scoring={scoring}
                                    start={start}
                                    winner={winner}
                                    winnerGame={winnerGame[0]}
                                    winnerMatch={winnerMatch[0]}
                                /> : null }
                                </View>
                                {selectedTab === 'score' ?
                                <ScoringTab
                                    scoring={scoring}
                                />: null }
                                {selectedTab === 'settings' ?
                                <SettingsTab
                                    settings={settings}
                                    setSettings={setSettings}
                                />: null }
                                {selectedTab === 'tuto' ?
                                <Text
                                    style={{ color: "white" }}
                                    className="tab-pane fade" id="tuto-tab-pane" role="tabpanel"
                                     aria-labelledby="tuto-tab" tabIndex="0">...
                                </Text>: null }
                            </View>

                                <Button
                                        onPress={() => setReloading()}
                                        color={"#0d6efd"}
                                        disabled={winner}
                                        title={scoring.partNb === 0 ? "Démarrer" : "Continuer"}
                                />

                                <Button
                                        color={"#adb5bd"}
                                        onPress={() => reloadGame()}
                                        disabled={!start}
                                        title={winner ? "Recommencer" : "Quitter la partie"}

                                />


                        </View>
                    </View>
                )}
            </ThemeContext.Consumer>
        </>
    )
};



const styles = StyleSheet.create({
    tabGroup:{
      //  height:100,
    },
    homeTab:{
        height:'auto',
    },
});

export default MainMenu;