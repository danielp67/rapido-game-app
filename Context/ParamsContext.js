import React from 'react';

export const Params = {
    playerSlot: ["reserveSlot", "tmpSlot1", "tmpSlot2", "tmpSlot3", "rapidoSlot"],
    suits: ["#0d6efd", "#198754", "#dc3545", "#ffc107"],
    values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    color: ["#0D47A1", "#1B5E20", "#B71C1C", "#F57F17", "#0d6efd", "#198754", "#dc3545", "#ffc107", "#0d6efd", "#198754", "#dc3545", "#ffc107"],
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