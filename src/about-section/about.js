import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../theme/theme-context';
import SideTitleSplitSection from '../section-template/side-title-split-section';
import { Title } from '../styled-components/basic-components'

const AboutContentTitle = styled(Title)`
    padding: 20px 0;
`

export default function AboutSection() {
    const themeContext = useContext(ThemeContext);
    
    return(
        <SideTitleSplitSection
            title="About"
            titleBackground={ themeContext.theme.highlight }
            titleTextColor={ themeContext.theme.background }
            underlineColor={ themeContext.theme.background }
            navTextColor = { themeContext.theme.foreground }
        >
            <AboutContentTitle>Placeholder</AboutContentTitle>
            <p>
                Starting with basic websites several years ago I found myself working as an Art Director for complex projects with a holistic approach soon. Visually appealing designs, subtle details and brand guidelines combined to innovative interfaces across various touch points became my daily companion.
            </p>
            
        </SideTitleSplitSection>            
    )
};