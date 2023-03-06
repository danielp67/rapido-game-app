import React, {useState} from 'react';
import {ThemeContext} from "../Context/ThemeContext";
import {Button, FlatList, StyleSheet, Text, View} from "react-native";
import TabItem from "../Shareable/TabItem";

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
        <View>

            <FlatList
                data={["Rank", "Player", "Points","Total"]}
                horizontal={true}
                renderItem={ ({item}) => {
                    return(
                        <Button
                            title={item}
                            color={"#0d6efd"}

                />
                    )}
                }
            />


            <FlatList
                data={sortScore}
                horizontal={true}
                renderItem={ ({item}) => {
                            return (
                                <View style={styles.scoringRow}
                                  //  key={}
                                >
                                    <Text style={styles.text}>{item.playerIndex}</Text>
                                    <Text style={styles.text}>{item.currentScore}</Text>
                                    <Text style={styles.text}>{item.total}</Text>
                                </View>

                            )
                        }
                    }
            />
        </View>
    )
};

const styles = StyleSheet.create({
    scoringRow:{
        display:'flex',
        flewDirection:'row',
    },
    text: {
        color:'white',
    },
});

export default ScoringTab;