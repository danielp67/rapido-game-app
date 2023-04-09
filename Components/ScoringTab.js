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

    return (
        <View>

            <FlatList
                data={[["Rank","rank"], ["Player","playerIndex"], ["Points","currentScore"],["Total","total"]]}
                horizontal={true}
                renderItem={ ({item}) => {
                    return(
                        <Button
                            title={item[0]}
                            color={"#0d6efd"}
                            onPress={()=> onSort(item[1])}
                />
                    )}
                }
            />


            <FlatList
                data={sortScore}
                vertical={true}
                renderItem={ ({item, index}) => {

                            return (
                                <View style={styles.scoringRow}
                                    key={index}
                                >
                                    <Text style={styles.text}>
                                        {index+1}
                                    </Text>
                                    <Text style={styles.text}>
                                    {item.playerIndex}
                                    </Text>
                                    <Text style={styles.text}>
                                        {item.currentScore}
                                    </Text>
                                    <Text style={styles.text}>
                                        {item.total}</Text>
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
        flexDirection:'row'
    },
    text: {
        color:'white',
        width:'25%',
        textAlign : 'center'
    },
});

export default ScoringTab;