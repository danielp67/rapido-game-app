import React from 'react';
import TabItem from "./TabItem";
import {FlatList} from "react-native";

const TabGroup = ({start}) => {
    const items = ["home", "score", "settings", "tuto"]


    return (

    <FlatList
        data={items}
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

export default TabGroup;