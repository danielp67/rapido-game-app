import React from 'react';
import {Button} from "react-native";

const TabItem = (props) => {

    const {id, disabled, setSelectedTab} = props

    return (
            <Button
                    onPress={()=> setSelectedTab(id)}
                    className={`nav-link text-capitalize ${id === "home"? "active" : ""}`}
                    id={`${id}-tab`}
                    color={"#0d6efd"}
                    disabled={disabled}
                    title={id}
            />

    )
}

export default TabItem;