import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../theme/theme-context';
import FullScreenViewSection from '../section-template/full-screen-view-section';
import { AbsCenter } from '../styled-components/basic-components';

const Header = styled.div`
    font-family: Albertiny, Photograph-Signature;
    font-size: 70px;
`

export default function Landing() {
    const themeContext = useContext(ThemeContext);
    const { theme } = themeContext
    return(
        <FullScreenViewSection sectionId="home" background={theme.darkest} fontColor={theme.lightest} navFontColor={theme.highlight} navUnderline={theme.lightest} displayNavOnMobile>
            <AbsCenter>
                <Header>Tung</Header>
                <Header>Khuat</Header>
            </AbsCenter>
        </FullScreenViewSection>
    )
};