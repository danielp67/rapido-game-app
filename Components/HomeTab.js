import React from 'react';

const HomeTab = (props) => {

    const {scoring, start, winner, winnerGame, winnerMatch} = props

    return (
        <>
            <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                 aria-labelledby="home-tab" tabIndex="0">

                <h4 className="card-title fw-bold">Rapido game</h4>
                {!start ?
                    <div>
                        Bienvenue dans Rapido Game !<br/>
                        Commencer une nouvelle partie ?
                    </div>

                    : <div>
                        Manche n°{scoring.partNb}<br/>
                        Gagnant de la manche : joueur n°{winnerMatch.playerIndex}
                    </div>
                }

                {scoring.partNb > 0 && winner ?

                    <div>
                        Le jeu est fini, le vainqueur est le joueur n°{winnerGame.playerIndex}<br/>
                        Commencer une nouvelle partie ?
                    </div>

                    : null
                }

            </div>

        </>
    )
}

export default HomeTab;