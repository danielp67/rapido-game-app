import React from 'react';
import Modal from "../Shareable/Modal";
import {View, Button, Text} from "react-native";

const ResumeMenu = (props) => {

    const {gamePause} = props
    return (

        <>
            <Button type="button" className="btn btn-info btn-lg my-2" data-bs-toggle="modal"
                    data-bs-target="#staticBackdropResume"
                onPress={()=>gamePause(true)}
            >
                <i className="fa fa-pause" aria-hidden="true"/>
            </Button>


            <Modal id={"staticBackdropResume"}>

                <View className="modal-header">
                    <Text className="modal-title fs-5" id="staticBackdropLabel">
                        <i className="fa fa-pause" aria-hidden="true"/> Pause
                    </Text>
                </View>
                <View className="modal-body">
                    <Text>Reprendre la partie ?</Text>


                </View>
                <View className="modal-footer">
                    <Button type="button" className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            onPress={()=>gamePause("quit")}>
                        <i className="fa fa-sign-in" aria-hidden="true"/> Quitter la partie
                    </Button>
                    <Button type="button" className="btn btn-primary"
                            data-bs-dismiss="modal"
                            onPress={()=>gamePause(false)}>
                    <i className="fa fa-play" aria-hidden="true"/> Continuer
                    </Button>
                </View>
            </Modal>


        </>
    )
}

export default ResumeMenu;