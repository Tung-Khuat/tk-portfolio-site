import React from 'react';
import styled, { keyframes } from 'styled-components';

function getRandomOffset(num) {
    return num + Math.random() * 2;
}

const animateColorChange = (theme) => keyframes`
    0% {
        transform: rotateZ(0) translate(-50%, -50%);
        box-shadow:
        inset 0 0 50px #fff,
        inset 20px 0 80px ${theme.darkest},
        inset -20px 0 80px ${theme.lightest},
        inset 20px 0 300px ${theme.darkest},
        inset -20px 0 300px ${theme.lightest},
        0 0 50px #fff,
        -10px 0 80px ${theme.darkest},
        10px 0 80px ${theme.lightest};
    }
    33% {
        box-shadow:
        inset 0 0 50px #fff,
        inset 20px 0 80px ${theme.secondaryDark},
        inset -20px 0 80px ${theme.lightest},
        inset 20px 0 300px ${theme.secondaryDark},
        inset -20px 0 300px ${theme.lightest},
        0 0 50px #fff,
        -10px 0 80px ${theme.secondaryDark},
        10px 0 80px ${theme.lightest};
    }
    69% {
        box-shadow:
        inset 0 0 50px #fff,
        inset 20px 0 80px ${theme.highlight},
        inset -20px 0 80px ${theme.lightest},
        inset 20px 0 300px ${theme.highlight},
        inset -20px 0 300px ${theme.lightest},
        0 0 50px #fff,
        -10px 0 80px ${theme.highlight},
        10px 0 80px ${theme.lightest};
    }
    100% {
        transform: rotateZ(15deg)  translate(50%, ${getRandomOffset(50)}}%);
        box-shadow:
        inset 0 0 50px #fff,
        inset 20px 0 80px ${theme.secondaryLight},
        inset -20px 0 80px ${theme.lightest},
        inset 20px 0 300px ${theme.secondaryLight},
        inset -20px 0 300px ${theme.lightest},
        0 0 50px #fff,
        -10px 0 80px ${theme.secondaryLight},
        10px 0 80px ${theme.lightest};
    }
`

const GlowingCircleDiv = styled.div`
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    border-radius: 50%;
    animation: 15s ${props => animateColorChange(props.theme)} forwards infinite alternate-reverse;
    box-shadow:
        inset 0 0 50px #fff,
        inset 20px 0 80px ${(props) => props.theme.highlight},
        inset -20px 0 80px ${(props) => props.theme.lightest},
        inset 20px 0 300px ${(props) => props.theme.highlight},
        inset -20px 0 300px ${(props) => props.theme.lightest},
        0 0 50px #fff,
        -10px 0 80px ${(props) => props.theme.highlight},
        10px 0 80px ${(props) => props.theme.lightest};
`

export default function GlowingCircle () {
   
    return (
        <GlowingCircleDiv>

        </GlowingCircleDiv>
    )
}