import React, {useContext} from 'react';
import SwitchButton from "../Shareable/SwitchButton";
import {ThemeContext} from "../Context/ThemeContext";
import RadioGroup from "../Shareable/RadioGroup";
import {ParamsContext} from "../Context/ParamsContext";


const SettingsTab = (props) => {

    const {settings, setSettings} = props
    const {params} = useContext(ParamsContext)

        return (

            <>
                <ThemeContext.Consumer>
                    {({theme, toggleTheme}) => {
                        const handleChange = (event) => {
                            const {name, value, checked} = event.target
                            setSettings((prevState) => ({
                                ...prevState,
                                [name]: value !== "on" ? value : checked,
                            }));

                            if (name === "switchDarkMode") {
                                toggleTheme()
                            }
                        }

                        return (
                            <div className="tab-pane fade" id="settings-tab-pane" role="tabpanel"
                                 aria-labelledby="settings-tab" tabIndex="0">
                                <div className={"text-start"}>
                                    Nombre de joueurs :
                                    <RadioGroup
                                        settings={settings}
                                        name={"nbPlayer"}
                                        radioParams={params.radioNbPlayer}
                                        handleChange={handleChange}
                                    />
                                    <hr/>
                                    Level :
                                    <RadioGroup
                                        settings={settings}
                                        name={"level"}
                                        radioParams={params.radioLevel}
                                        handleChange={handleChange}
                                    />
                                    <hr/>
                                    {params.switchParams.map((mapping, index) => (
                                        <SwitchButton
                                            key={index}
                                            settings={settings}
                                            name={mapping.name}
                                            onChange={handleChange}
                                            label={mapping.label}
                                        />
                                    ))}
                                </div>
                            </div>
                        )
                    }}
                </ThemeContext.Consumer>

            </>
        )

}

export default SettingsTab;