import React, { useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { themes, ThemeContext } from '../theme/theme-context';
import Navigation from '../navigation/navigation';

const LandingSection = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    background: ${(props)=>props.background || props.theme.foreground};
    color: ${(props)=>props.color || props.theme.background};
`
const CenteredContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin: auto;
    transform: translate(-50%, -50%);
`
const Header = styled.div`
    font-family: Albertiny;
    font-size: 70px;
`

export default function Landing() {
    const themeContext = useContext(ThemeContext);
    return(
        <ThemeProvider theme={themeContext.theme}>
            <LandingSection>
                    <CenteredContent>
                        <Header>Tung</Header>
                        <Header>Khuat</Header>
                        <button onClick={()=>themeContext.switchTheme(themes.slightColdPalette)}>switch</button>
                        <button onClick={()=>themeContext.switchTheme(themes.lightWarmPalette)}>switch</button>
                        <button onClick={()=>themeContext.toggleDarkMode()}>toggle</button>
                    </CenteredContent>
                <Navigation textColor={themeContext.theme.highlight} underlineColor={themeContext.theme.background} />
            </LandingSection>
        </ThemeProvider>
    )
};