import React from 'react';
import {ThemeContext} from "../Context/ThemeContext";
import {View} from "react-native";

const Modal = ({id, children}) => {

    return (

            <ThemeContext.Consumer>
                {({theme}) => (
            <View className="modal fade" id={id} aria-hidden="true"
                 data-bs-backdrop="static" data-bs-keyboard="false"
                 aria-labelledby={id} tabIndex="-1" style={{display: "none"}}>
                <View className="modal-dialog modal-dialog-centered">
                    <View className={`modal-content ${theme.className}`}>
                        {children}
                    </View>
                </View>
            </View>
                )}
            </ThemeContext.Consumer>

    )
}

export default Modal;