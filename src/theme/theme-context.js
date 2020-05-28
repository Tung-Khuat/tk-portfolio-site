import React from 'react';

export const themes = {
    lightWarmPalette:  {
        background: "#F2DBD5",
        foreground: "#292929",
        highlight: "#f7484e",
        get paletteArray() {
            return removeBackgroundColor(
                ["#f7484e","#73344B","#292929","#F29C50", "#F2DBD5"],
                this.background
            )
        } 
    },
    slightColdPalette:  {
        background: "#F2DBD5",
        foreground: "#0F1B26",
        highlight: "#2E728C",
        get paletteArray() {
            return removeBackgroundColor(
                ["#0F1B26","#265573","#2E728C","#8FC4D9, #F2DBD5"],
                this.background
            )
        } 
    },
}


function removeBackgroundColor (array, color) {
    const index = array.indexOf(color);
    array.splice(index, 1);
    return array;
}

export const ThemeContext = React.createContext({
    theme: themes.lightWarmPalette,
    toggleDarkMode: () => {},
    switchTheme: () => {},
});


