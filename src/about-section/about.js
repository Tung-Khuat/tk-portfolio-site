import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../theme/theme-context';
import { Title, Wrapper, HighlightedLink } from '../styled-components/basic-components';
import data from '../../data/about-info.json';
import SideTitleSplitSection from '../section-template/side-title-split-section';
import HexagonImage from '../image-display/hexagon-image';
import TechListDisplay from './tech-list-display';


const AboutContentHeader = styled(Title)`
    padding: 25px 0;
`
const CtaLink = styled(HighlightedLink)`
    margin: 10px 0;
    display: block;
`


export default function AboutSection() {
    const themeContext = useContext(ThemeContext);
    
    return(
            <SideTitleSplitSection
                title="About"
                titleBackground={ themeContext.theme.highlight }
                titleFontColor={ themeContext.theme.lightest }
                underlineColor={ themeContext.theme.lightest }
                navFontColor = { themeContext.theme.darkest }
                middleElement = {<HexagonImage src={"./images/profile-pic.jpg"} />}
            >
                <AboutContent/>
            </SideTitleSplitSection>            
    )
};

function AboutContent() {
    return(
        <Wrapper>
            {
                data && (
                    data.map((section) => (
                        <div>
                            <AboutContentHeader>{section.header}</AboutContentHeader>
                            <h4>{ section.subHeader }</h4>
                            <p>{ section.paragraph }</p>
                            { 
                                section.callToAction && section.callToAction.length > 0 &&(
                                    section.callToAction.map((cta) => (
                                        <CtaLink href={ cta.action }>{ cta.label }</CtaLink>
                                    )) 
                                )
                            }
                        </div>
                    ))
                )
            }
            <TechListDisplay />
        </Wrapper>
    )
}