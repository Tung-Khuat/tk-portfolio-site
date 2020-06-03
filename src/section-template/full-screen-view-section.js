import React from 'react';
import styled from 'styled-components';
import Navigation from '../navigation/navigation';

const FullScreenViewSectionContainer = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    background: ${(props)=>props.background || props.theme.lightest};
    color: ${(props)=>props.color || props.theme.darkest};
`
export default function FullScreenViewSection({children, background, fontColor, navFontColor, navUnderline, sectionId}) {
    return(
        <FullScreenViewSectionContainer id={sectionId && sectionId.toLowerCase()} background={background} color={fontColor}>
                {children}
            <Navigation textColor={navFontColor} underlineColor={navUnderline} />
        </FullScreenViewSectionContainer>
    )
};