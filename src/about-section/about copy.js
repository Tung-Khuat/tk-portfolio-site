import React, { useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../theme/theme-context';
import SectionHeader from '../section-header/section-header';
import { useEventListener } from "../helpers/useEventListener";


const AboutContainer = styled.section`
    position: relative;
    display: flex;
`
const RightContent = styled.div`
    position: relative;
    width: 50vh;
    height: 200vh; /* remember to remove */
    padding: 49px;
`
const Header = styled.div`
    font-size: 29px;    
    padding: 20px 0;
`

export default function AboutSection() {
    const theme = useContext(ThemeContext);
    const aboutSectionRef = useRef();
    const [isFixed, toggleFixed] = useState(false);

    useEventListener('scroll', handleOnScroll);

    function handleOnScroll() {
        const SectionClientRect = aboutSectionRef.current.getBoundingClientRect();
        if(SectionClientRect.top < 0 && SectionClientRect.bottom > 0)
            toggleFixed(true);

    }

    return(
        <AboutContainer id="about" style={{ backgroundColor: theme.background, color: theme.foreground }}>
            <SectionHeader 
                title={'About'}
                background={ theme.highlight }
                underline={ theme.background } 
            />
            <RightContent ref={aboutSectionRef}>
                <Header>Placeholder</Header>
                <p>
                    Starting with basic websites several years ago I found myself working as an Art Director for complex projects with a holistic approach soon. Visually appealing designs, subtle details and brand guidelines combined to innovative interfaces across various touch points became my daily companion.
                </p>
                <Header>Placeholder</Header>
                <p>
                    Starting with basic websites several years ago I found myself working as an Art Director for complex projects with a holistic approach soon. Visually appealing designs, subtle details and brand guidelines combined to innovative interfaces across various touch points became my daily companion.
                </p>
                <Header>Placeholder</Header>
                <p>
                    Starting with basic websites several years ago I found myself working as an Art Director for complex projects with a holistic approach soon. Visually appealing designs, subtle details and brand guidelines combined to innovative interfaces across various touch points became my daily companion.
                </p>
                <Header>Placeholder</Header>
                <p>
                    Starting with basic websites several years ago I found myself working as an Art Director for complex projects with a holistic approach soon. Visually appealing designs, subtle details and brand guidelines combined to innovative interfaces across various touch points became my daily companion.
                </p>
                <Header>Placeholder</Header>
                <p>
                    Starting with basic websites several years ago I found myself working as an Art Director for complex projects with a holistic approach soon. Visually appealing designs, subtle details and brand guidelines combined to innovative interfaces across various touch points became my daily companion.
                </p>
                <Header>Placeholder</Header>
                <p>
                    Starting with basic websites several years ago I found myself working as an Art Director for complex projects with a holistic approach soon. Visually appealing designs, subtle details and brand guidelines combined to innovative interfaces across various touch points became my daily companion.
                </p>
            </RightContent>
        </AboutContainer>
    )
};