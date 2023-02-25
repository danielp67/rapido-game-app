import React from 'react';
import {Button} from "react-native";

const TabItem = (props) => {

    const {id, disabled} = props

    return (
        <li className="nav-item" role="presentation">
            <Button
                    onPress={()=>console.log("hello")}
                    className={`nav-link text-capitalize ${id === "home"? "active" : ""}`}
                    id={`${id}-tab`} data-bs-toggle="tab"
                    data-bs-target={`#${id}-tab-pane`} type="button" role="tab"
                    disabled={disabled}
                    aria-controls={`${id}-tab-pane`} aria-selected={id === "home"}
                    title={id}
            />

        </li>
    )
}

export default TabItem;