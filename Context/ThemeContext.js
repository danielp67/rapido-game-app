import React from 'react';

export const Theme = {
    dark: {
        className:"bg-dark text-white table-dark"
    },

    light: {
        className:""
    }
}

export const ThemeContext = React.createContext({
    theme: Theme.dark,
    toggleTheme: () => {
    },
});

