import React from 'react';
import styled from 'styled-components';
import NavigationInSections from '../navigation/navigation-in-sections';
import { Wrapper } from '../styled-components/basic-components'
import { media } from '../styled-components/media-breakpoints'


const SectionContainer = styled.section`
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    ${media.desktop.medium} {
        display: block;
    }
`
const ContentContainer = styled(Wrapper)`
    width: ${({contentWidth}) => contentWidth + '%'};
    transition: 1s width cubic-bezier(.77,0,.175,1);
    ${media.desktop.medium} {
        width: 100%;
    }
`
const InnerContent = styled.div`
    padding: ${({noPadding}) => (noPadding ? 0 : "79px")};
    ${media.desktop.medium} {
        padding: ${({noPadding}) => (noPadding ? 0 : "50px")};
    }
`
const TitleContainer = styled(Wrapper)`
    position: sticky;
    top: 0;
    left: 0;
    width: ${({titleWidth}) => titleWidth + '%'};
    height: 100vh;
    transition: 1s width cubic-bezier(.77,0,.175,1);
    z-index: 50;

    ${media.desktop.medium} {
        width: 100%;
        height: 20vh;
        position: relative;
    }
`
const CenteredContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin: auto;
    transform: translate(-50%, -50%);
`
const MiddleElementContainer = styled.div`
    position: absolute;
    top: 10%;
    right: 0;
    transform: translateX(50%);
    ${media.desktop.medium} {
       display: none;
    }
`
const Title = styled.div`
    font-family: Albertiny, Photograph-Signature;
    font-size: 70px;
`

export default function SideTitleSplitSection(props) {
    const { children, title, titleBackground, titleFontColor, underlineColor, navFontColor, noPadding, sectionId, expanded, middleElement, customNavArray } = props
    let titleWidth = 50;
    
    if(expanded)
        titleWidth = 30;

    return(
            <SectionContainer id={sectionId || title.toLowerCase()}>
                <TitleContainer background={titleBackground} color={titleFontColor} titleWidth={titleWidth}>
                    {
                        middleElement && (
                            <MiddleElementContainer>
                                {middleElement}
                            </MiddleElementContainer>
                        )
                    }
                    <CenteredContent>
                        <Title>{title}</Title>
                    </CenteredContent>
                    <NavigationInSections textColor={navFontColor} underlineColor={underlineColor} customNavArray={customNavArray}/>
                </TitleContainer>
                <ContentContainer  contentWidth={100 -titleWidth} >
                    <InnerContent noPadding={noPadding}>
                        {children}
                    </InnerContent>
                </ContentContainer>
            </SectionContainer>
    )
};