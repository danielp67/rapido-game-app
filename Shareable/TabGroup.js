import React from 'react';
import TabItem from "./TabItem";
import {FlatList, StyleSheet} from "react-native";

const TabGroup = (props) => {
    const {start, setSelectedTab} = props
    const items = ["home", "score", "settings", "tuto"]

    return (

    <FlatList
        style={styles.tabGroup}
        data={items}
        horizontal={true}
        renderItem={ ({item}) => {
                let disabled = false
                if((item === "settings" && start) || (item === "score" && !start))
                {
                    disabled=true
                }
                return(
                    <TabItem
                        id={item}
                        disabled={disabled}
                        setSelectedTab={setSelectedTab}
                    />
                )
            }
        }
    />
    )
}


const styles = StyleSheet.create({
    tabGroup:{
        display:'flex',
    },

});


export default TabGroup;