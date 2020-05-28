import React, { useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ThemeContext } from '../theme/theme-context';
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
`
const CenteredContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin: auto;
    transform: translate(-50%, -50%);
`
const Title = styled.div`
    font-family: Albertiny;
    font-size: 70px;
`

export default function SideTitleSplitSection(props) {
    const { children, title, titleBackground, titleTextColor, underlineColor, navTextColor, noPadding, sectionId, expanded } = props
    const themeContext = useContext(ThemeContext);
    let titleWidth = 50;
    
    if(expanded)
        titleWidth = 30;

    return(
        <ThemeProvider theme={themeContext.theme}> 
            <SectionContainer id={sectionId || title.toLowerCase()}>
                <TitleContainer background={titleBackground} color={titleTextColor} titleWidth={titleWidth}>
                    <CenteredContent>
                        <Title>{title}</Title>
                    </CenteredContent>
                    <Navigation textColor={navTextColor} underlineColor={underlineColor}/>
                </TitleContainer>
                <ContentContainer  contentWidth={100 -titleWidth}>
                    <Content noPadding={noPadding}>
                        {children}
                    </Content>
                </ContentContainer>
            </SectionContainer>
        </ThemeProvider>
    )
};