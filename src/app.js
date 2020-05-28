import React, { useState } from 'react';
import { themes, ThemeContext } from './theme/theme-context'

// import MainCanvasIndex from './main-canvas/main-canvas-index';
// import CanvasSlider from './canvas-slider/canvas-slider';
import LandingSection from './landing-section/landing';
import AboutSection from './about-section/about'
import WorkSection from './work-section/work-section';

// const canvasArray = [<MainCanvasIndex/>, <div/>]

export default function App () {
    const [themeValue, setCurrentTheme] = useState({
        theme: themes.lightWarmPalette,
        switchTheme: (newTheme) => switchTheme(newTheme),
        toggleDarkMode,
    });
    function switchTheme(newTheme) {
        setCurrentTheme((state)=>({
            ...state,
            theme: newTheme
        }));
    };
    function toggleDarkMode() {
        setCurrentTheme((state)=>({
            ...state,
            theme: {
                ...state.theme,
                background: state.theme.foreground,
                foreground: state.theme.background,
            },
        }));
    };
    return(
        <ThemeContext.Provider value={themeValue}>
            <LandingSection />
            <AboutSection />
            <WorkSection />
        </ThemeContext.Provider>
    )
}
