import React from 'react';

export const Params = {
    playerSlot: ["reserveSlot", "tmpSlot1", "tmpSlot2", "tmpSlot3", "rapidoSlot"],
    suits: ["primary", "success", "warning", "danger"],
    values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    color: ["primary", "success", "danger", "warning", "primary", "success", "danger", "warning", "primary", "success", "danger"],
    switchParams: [{name: "switchCountScore", label: "Comptage des points"},
        {name: "switchTimer", label: "Timer"},
        {name: "switchDarkMode", label: "Dark Mode"}],
    radioNbPlayer: [{label: "4", value: "4"}, {label: "8", value: "8"},
        {label: "12", value: "12"}],
    radioLevel: [{label: "Easy", value: "3500"},
        {label: "Medium", value: "2000"},
        {label: "Hard", value: "1000"}]
}

export const ParamsContext = React.createContext({
    params: Params,
});