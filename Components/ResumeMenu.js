import React from 'react';
//import Modal from "../Shareable/Modal";
import {View, Button, Text, Modal, StyleSheet} from "react-native";

const ResumeMenu = (props) => {

    const {gamePause, isVisible} = props


    return (

        <>
            <View>
            <Button
                color={"#0d6efd"}
                onPress={()=>gamePause(true)}
                title={"Pause"}
            />
            </View>
            <View style={styles.modal}>
            <Modal
                animationType = {"fade"}
                transparent = {true}
                visible = {isVisible}
                onRequestClose = {() =>{ console.log("Modal has been closed.") } }>
                <View style={styles.modal}>
                    <Text style={styles.textBold}>
                        Pause
                    </Text>

                    <Text style={styles.text}>Reprendre la partie ?</Text>
                    <Button
                            color={"#adb5bd"}
                            onPress={()=>gamePause("quit")}
                            title={"Quitter la partie"}
                    />
                    <Button
                        color={"#0d6efd"}
                        onPress={()=>gamePause(false)}
                        title={"Continuer"}
                    />
                </View>
            </Modal>
        </View>
        </>
    )
};



const styles = StyleSheet.create({
    modal: {
        width:'50%',
        margin: 'auto',
        display:'flex',
        alignItems:'center',
        backgroundColor: '#212121',
     //   justifyContent:'center'
    },


    text: {
        color:'white',
        display:'flex',
        alignItems:'center',
        backgroundColor: '#212121',

    },
    textBold: {
        color:'white',
        fontSize:20,
        fontWeight:"bolder",
        backgroundColor: '#212121',

    },


});

export default ResumeMenu;