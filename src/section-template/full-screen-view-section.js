import React from 'react';
import styled from 'styled-components';
import NavigationInSections from '../navigation/navigation-in-sections';

const FullScreenViewSectionContainer = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    background: ${(props)=>props.background || props.theme.lightest};
    color: ${(props)=>props.color || props.theme.darkest};
`
export default function FullScreenViewSection({children, background, fontColor, navFontColor, navUnderline, sectionId, displayNavOnMobile, customNavArray}) {
    return(
        <FullScreenViewSectionContainer id={sectionId && sectionId.toLowerCase()} background={background} color={fontColor}> 
                {children}
            <NavigationInSections textColor={navFontColor} underlineColor={navUnderline} displayOnMobile={displayNavOnMobile} customNavArray={customNavArray}/>
        </FullScreenViewSectionContainer>
    )
};