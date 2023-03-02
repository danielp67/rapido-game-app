import React from 'react';
//import Modal from "../Shareable/Modal";
import {View, Button, Text, Modal, StyleSheet} from "react-native";

const ResumeMenu = (props) => {

    const {gamePause, isVisible} = props


    return (

        <>
            <Button type="button" className="btn btn-info btn-lg my-2" data-bs-toggle="modal"
                    data-bs-target="#staticBackdropResume"
                onPress={()=>gamePause(true)}
                    title={"Pause"}
            />

            <View style={styles.modal}>
            <Modal
                animationType = {"fade"}
                transparent = {true}
                visible = {isVisible}
                onRequestClose = {() =>{ console.log("Modal has been closed.") } }>
                <View style={styles.text}>
                    <Text className="modal-title fs-5" id="staticBackdropLabel">
                        Pause
                    </Text>

                    <Text>Reprendre la partie ?</Text>
                    <Button type="button" className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            onPress={()=>gamePause("quit")}
                            title={"Quitter la partie"}
                    />
                    <Button type="button" className="btn btn-primary"
                            data-bs-dismiss="modal"
                            onPress={()=>gamePause(false)}
                            title={"Continuer"}
                    />
                </View>
            </Modal>
            </View>

            {/*<Modal id={"staticBackdropResume"}>

                <View className="modal-header">
                    <Text className="modal-title fs-5" id="staticBackdropLabel">
                        Pause
                    </Text>
                </View>
                <View className="modal-body">
                    <Text>Reprendre la partie ?</Text>


                </View>
                <View className="modal-footer">
                    <Button type="button" className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            onPress={()=>gamePause("quit")}
                            title={"Quitter la partie"}
                    />
                        <Button type="button" className="btn btn-primary"
                            data-bs-dismiss="modal"
                            onPress={()=>gamePause(false)}
                                title={"Continuer"}
                        />
                </View>
            </Modal>*/}


        </>
    )
};



const styles = StyleSheet.create({
    modal: {
        backgroundColor: '#000000',
        color:'#ffffff',
        width:'100%',
        display:'flex',
        alignItems:'center',
     //   justifyContent:'center'
    },
    text: {
        backgroundColor: '#000000',
        color:'#ffffff',

        width:'50%',
        display:'flex',
        alignItems:'center',
     //   justifyContent:'center'
    }
});

export default ResumeMenu;