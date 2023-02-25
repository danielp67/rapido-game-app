import React from 'react';
import TabItem from "./TabItem";

const TabGroup = ({start}) => {
    const items = ["home", "score", "settings", "tuto"]


    return (
        <ul className=" nav nav-tabs" id="myTab" role="tablist">
            {items.map((mapping, index) => {
                let disabled = false
                if((mapping === "settings" && start) || (mapping === "score" && !start))
                {
                    disabled=true
                }
                return(
                    <TabItem
                        key={index}
                        id={mapping}
                        disabled={disabled}
                    />
                )
            })}
        </ul>
    )
}

export default TabGroup;