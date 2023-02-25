import React from 'react';

export const Settings = {

    nbPlayer:"4",
    level:"100",
    switchCountScore : true,
    switchTimer : true,
    switchDarkMode : true,
    dark: {className:"bg-dark text-white"},
    light: {className:""},
    color: ["primary", "success", "danger", "warning", "primary", "success", "danger", "warning", "primary", "success", "danger"]

}

export const SettingsContext =  React.createContext({
    settingsContext: Settings,
  //  setScore: () => {},
});