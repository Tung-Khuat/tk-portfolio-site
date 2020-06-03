/* eslint-disable react/jsx-no-undef */
import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { ThemeContext } from '../theme/theme-context';

const HexagonButtonContainer = styled.div`
    color: ${(props) => props.color || props.theme.lightest};
    font-size: 16px;
    display: block;
    width: 3.75em;
    height: 4.25em;
    margin: 1em auto;
    -webkit-transform-origin: center center;
    -ms-transform-origin: center center;
    transform-origin: center center;
    position: relative;
    text-decoration: none;
    cursor: pointer;    
    transition: .15s cubic-bezier(.25,.46,.45,.94) .1s;

    .slice:nth-child(1) {
        transform: rotateZ(60deg) ${({onlyShowWhenHover}) => onlyShowWhenHover ? "rotateY(-90deg)" : "rotateY(0deg)"} rotateX(0deg);
        transition: .15s cubic-bezier(.25,.46,.45,.94) .48s;
    }
    .slice:nth-child(2) {
        transform: rotateZ(120deg) rotateY(-90deg) rotateX(0deg);
        transition: .15s cubic-bezier(.25,.46,.45,.94) .4s;
    }
    .slice:nth-child(3) {
        transform: rotateZ(180deg) rotateY(-90deg) rotateX(0deg);
        transition: .15s cubic-bezier(.25,.46,.45,.94) .32s;
    }
    .slice:nth-child(4) {
        transform: rotateZ(240deg) rotateY(-90deg) rotateX(0deg);
        transition: .15s cubic-bezier(.25,.46,.45,.94) .24s;
    }
    .slice:nth-child(5) {
        transform: rotateZ(300deg) rotateY(-90deg) rotateX(0deg);
        transition: .15s cubic-bezier(.25,.46,.45,.94) .16s;
    }
    .slice:nth-child(6) {
        transform: rotateZ(360deg) rotateY(-90deg) rotateX(0deg);
        transition: .15s cubic-bezier(.25,.46,.45,.94) .08s;
    }
`
const HexagonSlice = styled.span`
    border-top: 1.125em solid transparent;
    border-right: none;
    border-bottom: 1em solid transparent;
    border-left: 1.875em solid ${(props) => props.bgColor || props.theme.darkest};;
    position: absolute;
    top: 0;
    left: 50%;
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    border-radius: 3px 3px 0 0;
    z-index: 100;
    transform: rotateY(-90deg);
`
const ButtonLabel = styled.div`
    transform: translateY(25%) scale(0);
    transition: .4s transform cubic-bezier(.6,-.28,.735,.045) 0s;
    z-index: 200;
    position: relative;
    text-transform: uppercase;
    font-size: 12px;
    top: 50%;
    left: 0;
    display: block;
`



export default function HexagonButton({children, bgColor, fontColor, onClick}) { 
    const themeContext = useContext(ThemeContext);
    return (
        <HexagonButtonContainer className="hexagon-button" bgColor={bgColor} fontColor={fontColor} onClick={onClick} onlyShowWhenHover={false}>
            <HexagonSlice className="slice"/>
            <HexagonSlice className="slice"/>
            <HexagonSlice className="slice"/>
            <HexagonSlice className="slice"/>
            <HexagonSlice className="slice"/>
            <HexagonSlice className="slice"/>

            <ButtonLabel className="hexagon-button-label">{children}</ButtonLabel>
            
        </HexagonButtonContainer>
    )       
}
