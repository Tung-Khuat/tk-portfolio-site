import React from 'react';
import styled from 'styled-components';

const CIButton = styled.button`
    color: ${(props) => props.color || props.theme.darkest};
    font-size: ${({fontSize}) => fontSize + "px" || "20px"};
    width: ${({size}) => size + "px" || "50px"} !important;
    height: ${({size}) => size + "px" || "50px"} !important;
    background-color: ${(props) => props.bgColor || "transparent"};
    border: 2px solid ${(props) => props.borderColor || props.theme.darkest};
    border-radius: 50%;
    padding: 5px;
    transition: .5s ease-in-out;
    transform-origin: center;
    text-align: center;
    line-height: 5px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        border: 2px solid ${(props) => props.highlight || props.theme.highlight};
        background-color: ${(props) => props.highlight || props.theme.highlight};
        color: ${(props) => props.color || props.theme.lightest};   
    }
`

export default function CircleIconButton({children, bgColor, borderColor, fontColor, onClick, fontSize, size, highlight}) { 
    return (
        <CIButton bgColor={bgColor} borderColor={borderColor} fontColor={fontColor} fontSize={fontSize || 23} onClick={onClick} size={size || 50}>
            {children}
        </CIButton>
    )       
}
