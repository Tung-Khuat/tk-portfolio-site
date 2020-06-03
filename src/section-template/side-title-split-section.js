import React from 'react';
import styled from 'styled-components';
import Navigation from '../navigation/navigation';
import { Wrapper } from '../styled-components/basic-components'


const SectionContainer = styled.section`
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
`
const ContentContainer = styled(Wrapper)`
    width: ${({contentWidth}) => contentWidth + '%'};
    transition: 1s width cubic-bezier(.77,0,.175,1);
`
const Content = styled.div`
    padding: ${({noPadding}) => (noPadding ? 0 : "79px")};
`
const TitleContainer = styled(Wrapper)`
    position: sticky;
    top: 0;
    left: 0;
    width: ${({titleWidth}) => titleWidth + '%'};
    height: 100vh;
    transition: 1s width cubic-bezier(.77,0,.175,1);
    z-index: 50;
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
`
const Title = styled.div`
    font-family: Albertiny;
    font-size: 70px;
`

export default function SideTitleSplitSection(props) {
    const { children, title, titleBackground, titleFontColor, underlineColor, navFontColor, noPadding, sectionId, expanded, middleElement } = props
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
                    <Navigation textColor={navFontColor} underlineColor={underlineColor}/>
                </TitleContainer>
                <ContentContainer  contentWidth={100 -titleWidth}>
                    <Content noPadding={noPadding}>
                        {children}
                    </Content>
                </ContentContainer>
            </SectionContainer>
    )
};