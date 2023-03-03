import React from 'react';
import TabItem from "./TabItem";
import {FlatList, StyleSheet} from "react-native";

const TabGroup = ({start}) => {
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
                       // key={index}
                        id={item}
                        disabled={disabled}
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