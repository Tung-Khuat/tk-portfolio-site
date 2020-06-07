import React, { useState, Suspense } from 'react';
import { themes, ThemeContext } from './theme/theme-context';
import { ThemeProvider } from 'styled-components';

import ThemeControlPanel from './theme/theme-control-panel';
import HexagonLoadingIndicator from './loading-indicators/hexagon-loading-indicator';

const LandingSection = React.lazy(() => 
    import('./landing-section/landing'),
);
const AboutSection = React.lazy(() => 
    import('./about-section/about'),
);
const WorkSection = React.lazy(() => 
    import('./work-section/work-section'),
);
const ContactSection = React.lazy(() => 
    import('./contact-section/contact'),
);

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
                <Suspense fallback={<HexagonLoadingIndicator fullScreenSize />}>
                    <ThemeControlPanel/>
                    <LandingSection />
                    <AboutSection />
                    <WorkSection />
                    <ContactSection />
                </Suspense>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}
