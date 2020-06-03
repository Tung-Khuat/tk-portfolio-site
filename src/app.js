import React, { useState } from 'react';
import { themes, ThemeContext } from './theme/theme-context';
import { ThemeProvider } from 'styled-components';

import LandingSection from './landing-section/landing';
import AboutSection from './about-section/about';
import ContactSection from './contact-section/contact';
import WorkSection from './work-section/work-section';
import ThemeControlPanel from './theme/theme-control-panel';


export default function App () {
    const [themeValue, setCurrentTheme] = useState({
        theme: themes.colorTheme1,
        switchTheme: (newTheme) => switchTheme(newTheme),
    });
    function switchTheme(newTheme) {
        setCurrentTheme((state)=>({
            ...state,
            theme: newTheme
        }));
    };

    // Two theme provider is because one to pass switch theme function and one is styled component theme provider
    return(
        <ThemeContext.Provider value={themeValue}>
            <ThemeProvider theme={themeValue.theme}>
                <ThemeControlPanel/>
                <LandingSection />
                <AboutSection />
                <WorkSection />
                <ContactSection />
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}
