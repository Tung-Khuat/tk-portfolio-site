import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../theme/theme-context';

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
`

export default function Navigation({textColor, underlineColor, customNavList}) {
    const theme = useContext(ThemeContext);

    return (
        <Nav color={textColor || theme.foreground} underlineColor={underlineColor || theme.highlight}>
            {
                customNavList && (
                    {customNavList}
                )
            }
            {
                !customNavList && (
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#work">Work</a></li>
                        <li><a href="#skill">Skill</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                )
            }
        </Nav>
    )
} 