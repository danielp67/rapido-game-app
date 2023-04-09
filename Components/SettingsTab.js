import React, {useContext} from 'react';
import SwitchButton from "../Shareable/SwitchButton";
import {ThemeContext} from "../Context/ThemeContext";
import RadioGroup from "../Shareable/RadioGroup";
import {ParamsContext} from "../Context/ParamsContext";
import {StyleSheet, Text, View} from "react-native";


const SettingsTab = (props) => {

    const {settings, setSettings} = props
    const {params} = useContext(ParamsContext)

        return (

            <>
                <ThemeContext.Consumer>
                    {({theme, toggleTheme}) => {
                        const handleChange = (event) => {
                            const {name, value, checked} = event
                            setSettings((prevState) => ({
                                ...prevState,
                                [name]: value !== "on" ? value : checked,
                            }));


                        }

                        return (
                            <View className="tab-pane fade" id="settings-tab-pane" role="tabpanel"
                                 aria-labelledby="settings-tab" tabIndex="0">
                                    <Text style={styles.text}>Level :</Text>
                                    <RadioGroup
                                        settings={settings}
                                        name={"level"}
                                        radioParams={params.radioLevel}
                                        handleChange={handleChange}
                                    />
                            </View>
                        )
                    }}
                </ThemeContext.Consumer>

            </>
        )

}


const styles = StyleSheet.create({
    text: {
        color:'white',
    },
});

export default SettingsTab;