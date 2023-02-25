import React, {useState} from 'react';
import {ThemeContext} from "../Context/ThemeContext";

const ScoringTab = ({scoring}) => {

    const [sort, setSort] = useState({
        currentScore: 'default',
        total: 'default',
        playerIndex: 'default'
    })
    const [sortScore, setSortScore] = useState([...scoring.score])
    const onSort = (props) => {
        let nextSort;
        let tmpScore = [...sortScore]

        if (sort[props] === 'down') {
            nextSort = 'up';
            const byPoint = (a, b) => b[props] - a[props]
            tmpScore = tmpScore.sort(byPoint)

        } else if (sort[props] === 'up') {
            nextSort = 'default';
            tmpScore = [...scoring.score]
        } else if (sort[props] === 'default') {
            nextSort = 'down';
            const byPoint = (a, b) => a[props] - b[props]
            tmpScore = tmpScore.sort(byPoint)

        }

        if (props === "playerIndex") {
            setSort({playerIndex: nextSort, currentScore: "default", total: "default"})

        } else if (props === "total") {
            setSort({total: nextSort, currentScore: "default", playerIndex: "default"})

        } else {

            setSort({currentScore: nextSort, total: "default", playerIndex: "default"})

        }
        setSortScore(tmpScore)
    }

    const sortTypes = {
        up: {
            class: 'sort-up',
            // fn: (a, b) => a.net_worth - b.net_worth
        },
        down: {
            class: 'sort-down',
            // fn: (a, b) => b.net_worth - a.net_worth
        },
        default: {
            class: 'sort',
            //  fn: (a, b) => a
        }
    }

    const {currentScore, total, playerIndex} = sort;

    return (
        <ThemeContext.Consumer>
            {({theme}) => (
                <div className="tab-pane fade" id="score-tab-pane" role="tabpanel"
                     aria-labelledby="score-tab" tabIndex="0">
                    <table
                        data-toggle="table"
                        data-search="true"
                        data-filter-control="true"
                        data-show-export="true"
                        data-click-to-select="true"
                        data-toolbar="#toolbar"

                        className={`table table-hover table-striped ${theme.className}`}>
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Player
                                <i className={`fa fa-${sortTypes[playerIndex].class}`}
                                   onClick={() => onSort("playerIndex")}/>
                            </th>
                            <th scope="col">Points
                                <i className={`fa fa-${sortTypes[currentScore].class}`}
                                   onClick={() => onSort("currentScore")}/>
                            </th>
                            <th scope="col">Total
                                <i className={`fa fa-${sortTypes[total].class}`} onClick={() => onSort("total")}/>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            sortScore.map((mapping, index) => {
                                let className = ""
                                if (mapping.playerIndex === 1) {
                                    className = "fw-bold"
                                }
                                return (
                                    <tr key={index} className={className}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{mapping.playerIndex}</td>
                                        <td>{mapping.currentScore}</td>
                                        <td>{mapping.total}</td>
                                    </tr>

                                )
                            })
                        }

                        </tbody>
                    </table>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}

export default ScoringTab;