import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../theme/theme-context';
import { media } from '../styled-components/media-breakpoints';
import { navLinkList } from './nav-link-list';

const Nav = styled.nav`
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0; 
    right: 0;
    ul {
        padding: 35px 0 50px;
        list-style:none;
        text-align: center;
    }
    ul li {
        display: inline-block;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 700;
        font-family: Proxima Nova Bold, sans-serif;
        color: ${props => props.color}; 
        &:not(:first-of-type):before {
            content: '/';
            padding: 0 12px 0 9px;
        }
    }
    a {
        display: inline-block;
        position: relative;
        &:hover:after {
            content: ' ';
            display: block;
            width: 100%;
            border-bottom: 2px solid;
            position: absolute;
            bottom: -0.7em;
            border-color: ${props => props.underlineColor};
        }
    }

    ${media.desktop.medium} {
        display: ${props => props.displayOnMobile ? "block" : "none"};
    }
`

export default function NavigationInSections({textColor, underlineColor, customNavList, displayOnMobile, customNavArray}) {
    const theme = useContext(ThemeContext);

    return (
        <Nav displayOnMobile={displayOnMobile} color={textColor || theme.darkest} underlineColor={underlineColor || theme.highlight}>
            <ul>
                {
                    customNavArray && customNavArray.map((link) => (
                        <li><a href={link.href}>{link.label}</a></li>
                    ))
                }
                {
                    !customNavArray && navLinkList.map((link) => (
                        <li><a href={link.href}>{link.label}</a></li>
                    ))
                }
            </ul>
        </Nav>
    )
} 