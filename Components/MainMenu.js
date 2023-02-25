import React from 'react';
import SettingsTab from "./SettingsTab";
import ScoringTab from "./ScoringTab";
import TabGroup from "../Shareable/TabGroup";
import {ThemeContext} from "../Context/ThemeContext";
import HomeTab from "./HomeTab";
import {Button} from "react-native";

const MainMenu = (props) => {

    const {scoring, settings, setSettings, setReloading, reloadGame, start} = props

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
                    <div className={"overlay row bg-secondary vh-100"}>
                        <div
                            className={`card col-md-6 col-12 offset-md-3 launch-card text-center my-auto ${theme.className}`}>
                            <TabGroup start={start}/>
                            <div className="card-body tab-content" id="myTabContent">
                                <HomeTab
                                    scoring={scoring}
                                    start={start}
                                    winner={winner}
                                    winnerGame={winnerGame[0]}
                                    winnerMatch={winnerMatch[0]}
                                />
                                <ScoringTab
                                    scoring={scoring}
                                />
                                <SettingsTab
                                    settings={settings}
                                    setSettings={setSettings}
                                />
                                <div className="tab-pane fade" id="tuto-tab-pane" role="tabpanel"
                                     aria-labelledby="tuto-tab" tabIndex="0">...
                                </div>
                            </div>

                            <div className="card-footer">
                                <Button className="btn btn-primary"
                                        onPress={() => setReloading()}
                                        disabled={winner}
                                        title={scoring.partNb === 0 ? "Démarrer" : "Continuer"}
                                />

                                <Button type="button" className="btn btn-secondary"
                                        onPress={() => reloadGame()}
                                        disabled={!start}
                                        title={winner ? "Recommencer" : "Quitter la partie"}

                                />

                            </div>

                        </div>
                    </div>
                )}
            </ThemeContext.Consumer>
        </>
    )
};

export default MainMenu;