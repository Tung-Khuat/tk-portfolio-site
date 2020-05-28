import React, {useState} from 'react';
import styled from 'styled-components';
import {ChevronRightRounded, ChevronLeftRounded} from '@material-ui/icons';

const CanvasSliderContainer = styled.div`
    width: 100%;
    position: relative;
`

const CanvasSliderSlide = styled.div`
    display: flex;
    width: 100%;
`           

const SlideButton = styled.div`
    position: absolute;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
    opacity: 0.5;
    font-size: 50px;
    &:hover {
        opacity: 1;
    }
`

export default function CanvasSlider({canvasArray}) { 
    const [canvasIndex, setCanvasIndex] = useState(0);

    function handleOnClick(number) {
        const nextIndex = canvasIndex + number
        if(nextIndex >= 0 && nextIndex <= canvasArray.length)
            setCanvasIndex(nextIndex)
        if(nextIndex < 0)
            setCanvasIndex(canvasArray.length)
        if(nextIndex > canvasArray.length)
            setCanvasIndex(0)
    }

    return (
        <CanvasSliderContainer>
            <CanvasSliderSlide>
                {canvasArray[canvasIndex]}
            </CanvasSliderSlide>
            <SlideButton 
                onClick={()=>{handleOnClick(-1)}}
                style={{left:0}}
            >
                <ChevronLeftRounded fontSize={"large"}/>
            </SlideButton>
            <SlideButton 
                onClick={()=>{handleOnClick(1)}}
                style={{right:0}}
            >
                <ChevronRightRounded fontSize={"large"}/>
            </SlideButton>
        </CanvasSliderContainer>
    )       
}