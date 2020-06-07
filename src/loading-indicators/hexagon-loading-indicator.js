import React from 'react';
import styled, { keyframes } from 'styled-components';
import { AbsCenter } from '../styled-components/basic-components';

const changeColorsAnimation = (theme) => keyframes`
  0% {
    border-left: 1.875em solid ${theme.darkest};
  }
  50% {
    border-left: 1.875em solid ${theme.highlight};
  }
  100% {
    border-left: 1.875em solid ${theme.lightest};
  }
`
const LoadingIndicatorWrap = styled.div`
    position: relative;
    width: ${(props) => props.fullScreenSize ? "100vw" : "100%"};    
    height: ${(props) => props.fullScreenSize ? "100vh" : "100%"}; 
    min-height: 50px;  
    z-index: 50; 
`
const AnimatedHexagon = styled(AbsCenter)`
    color: ${(props) => props.color ? props.color : props.theme.lightest};
    font-size: ${({fontSize}) => fontSize ? fontSize + "px" : "16px"};
    display: block;
    width: 3.75em;
    height: 4.25em;
    margin: 1em auto;
    -webkit-transform-origin: center center;
    -ms-transform-origin: center center;
    transform-origin: center center;
    text-decoration: none;
    transition: .15s cubic-bezier(.25,.46,.45,.94) .1s;
    transition: .4s transform cubic-bezier(.6,-.28,.735,.045) .5s,.6s height cubic-bezier(.77,0,.175,1) 0s;

    .slice:nth-child(1) {
        transform: rotateZ(60deg) rotateY(0deg) rotateX(0deg);
        transition: .15s cubic-bezier(.25,.46,.45,.94) .08s;
        animation-delay: .08s;
    }
    .slice:nth-child(2) {
        transform: rotateZ(120deg) rotateY(0deg) rotateX(0deg);
        transition: .15s cubic-bezier(.25,.46,.45,.94) .16s;
        animation-delay: .16s;
    }
    .slice:nth-child(3) {
        transform: rotateZ(180deg) rotateY(0deg) rotateX(0deg);
        transition: .15s cubic-bezier(.25,.46,.45,.94) .24s;
        animation-delay: .24s;
    }
    .slice:nth-child(4) {
        transform: rotateZ(240deg) rotateY(0deg) rotateX(0deg);
        transition: .15s cubic-bezier(.25,.46,.45,.94) .32s;
        animation-delay: .32s;
    }
    .slice:nth-child(5) {
        transform: rotateZ(300deg) rotateY(0deg) rotateX(0deg);
        transition: .15s cubic-bezier(.25,.46,.45,.94) .4s;
        animation-delay: .4s;
    }
    .slice:nth-child(6) {
        transform: rotateZ(360deg) rotateY(0deg) rotateX(0deg);
        transition: .15s cubic-bezier(.25,.46,.45,.94) .48s;
        animation-delay: .48s;
    }
    .hexagon-label {
        transform: translateY(-50%) scale(1);
    }
`
const HexagonSlice = styled.span`
    border-top: 1.125em solid transparent;
    border-right: none;
    border-bottom: 1em solid transparent;
    border-left: 1.875em solid ${(props) => props.bgColor ? props.bgColor : props.theme.darkest};
    position: absolute;
    top: 0;
    left: 50%;
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    border-radius: 3px 3px 0 0;
    z-index: 100;
    transform: rotateY(-90deg);
    animation: 1.5s ${props => changeColorsAnimation(props.theme)} cubic-bezier(.25,.46,.45,.94) infinite alternate;
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
    text-align: center;
`



export default function HexagonLoadingIndicator({children, fontColor, fontSize, fullScreenSize}) { 
    return (
        <LoadingIndicatorWrap fontColor={fontColor} fontSize={fontSize} fullScreenSize={fullScreenSize} >
          <AnimatedHexagon className={`hexagon`} >
              <HexagonSlice className="slice" />
              <HexagonSlice className="slice" />
              <HexagonSlice className="slice" />
              <HexagonSlice className="slice" />
              <HexagonSlice className="slice" />
              <HexagonSlice className="slice" />

              <ButtonLabel className="hexagon-label">{children}</ButtonLabel>
              
          </AnimatedHexagon>
        </LoadingIndicatorWrap>
    )       
}
