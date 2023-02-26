import React from 'react';

export const Settings = {

    nbPlayer:"4",
    level:"100",
    switchCountScore : true,
    switchTimer : true,
    switchDarkMode : true,
    dark: {className:"bg-dark text-white"},
    light: {className:""},
    color: ["#0d6efd", "#198754", "#dc3545", "#ffc107", "#0d6efd", "#198754", "#dc3545", "#ffc107", "#0d6efd", "#198754", "#dc3545", "#ffc107"]

}

export const SettingsContext =  React.createContext({
    settingsContext: Settings,
  //  setScore: () => {},
});