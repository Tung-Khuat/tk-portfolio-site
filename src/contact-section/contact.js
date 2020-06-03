import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../theme/theme-context';
import FullScreenViewSection from '../section-template/full-screen-view-section';
import { AbsCenter, Title } from '../styled-components/basic-components';

const ContactSectionContainer = styled(AbsCenter)`
    text-align: center;
`
const ContactHeader = styled(Title)`
    padding: 30px 0 10px;
    
`
const SectionTitle = styled.p`
    font-family: Albertiny;
    font-size: 70px;
    position: relative;
    display: inline-block;
    &:after {
    content: "";
    display: block;
    width: 55%;
    margin: auto;
    border-bottom: 5px solid;
    position: absolute;
    left: 50%;
    bottom: 0.1em;
    transform: translateX(-50%);
    border-color: ${(props) => props.color || props.theme.highlight};
    }
`
const Email = styled(Title)`
    font-weight: bold;
    margin: 30px 0;
`
const HighlightText = styled.span`
    color: ${(props) => props.color || props.theme.highlight};
`
const SocialIcon = styled.div`
    font-size: 40px;
    margin: 10px 5px;
    display: inline-block;
    &:hover {
        color: ${(props) => props.color || props.theme.highlight};
    }
`

const contactLinksData = [
    { label: 'Github', path: 'https://github.com/Tung-Khuat', faClassName: 'fab fa-github' },
    { label: 'Linkedin', path: 'https://github.com/Tung-Khuat', faClassName: 'fab fa-linkedin' },
    { label: 'Resume', path: 'https://www.tungkhuat.com/CV-Tung-Khuat.pdf', faClassName: 'fas fa-file-alt' },
];

export default function ContactSection() {
    const themeContext = useContext(ThemeContext);
    const { theme } = themeContext;

    return(
            <FullScreenViewSection
                sectionId="contact"
                background={ theme.secondaryLight }
                fontColor={ theme.darkest }
                navUnderline={ theme.highlight }
                navFontColor = { theme.darkest }
            >
                <ContactContent />
            </FullScreenViewSection>            
    )
};


function ContactContent() {
    return(
        <ContactSectionContainer>
            <SectionTitle> Contact </SectionTitle>
            <ContactHeader>
                Let's get in touch!
            </ContactHeader>
            <p>I am interested in freelance opportunities and full-time employment </p>
            <Email><HighlightText>Email</HighlightText> tungkhuat09@gmail.com </Email>
            {
                contactLinksData.map((link, i) => (
                    <SocialIcon key={i}>
                      <a href={link.path} target="blank">
                        <i className={link.faClassName} />
                      </a>
                    </SocialIcon>
                ))
            }
        </ContactSectionContainer>
    )
}

