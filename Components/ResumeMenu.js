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
                    title={"Pause"}
            />


          {/*  <Modal id={"staticBackdropResume"}>

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
}

export default ResumeMenu;