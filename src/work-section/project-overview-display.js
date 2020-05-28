import React, { useContext, useRef, useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ThemeContext } from '../theme/theme-context';
import { Button, Title, Subtitle } from '../styled-components/basic-components';

const DisplayContainer = styled.div`
    color: ${(props) => props.color || props.theme.background};
    width: 100%;
    height: 110vh;
    position: relative;
    overflow:hidden;
    transition: 1s height cubic-bezier(.77,0,.175,1);
`
const BackgroundImage = styled.div`
    background-image: url(${({backgroundImage}) => backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: 15s transform linear;
`
const CenteredContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin: auto;
    text-align: center;
    transform: translate(-50%, -50%);   
`
const Filter = styled.div`
    width: 100%;
    height: 100%;
    background: #355C7D;
    background: -webkit-linear-gradient(to right, #C06C84, #6C5B7B, #355C7D);
    background: linear-gradient(to right, #C06C84, #6C5B7B, #355C7D);
    opacity: 0.5;
    transition: 5s opacity linear;
    &:hover {
        opacity: 0.1;
    }
`
const BackgroundContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
`


export default function ProjectOverviewDisplay({project, expandProject, collapseProject, expanded, index, checkUnselected}) {
    const themeContext = useContext(ThemeContext);
    const backgroundImageRef = useRef();
    const containerRef = useRef();
    const [buttonActive, setButtonActive] = useState(false)
    const { banner, title, subtitle } = project;

    useEffect(() => {
        const displayContainer = containerRef.current
        if(expanded){
            const isHidden = checkUnselected();

            displayContainer.style.height = '30vh';
            if (isHidden) displayContainer.style.display = "none";
        }
        if(!expanded){
            displayContainer.style.height = '110vh';
            displayContainer.style.display = 'block';
        }
    }, [expanded, checkUnselected])

    function handleOnMouseEnter() {
        backgroundImageRef.current.style.transform = 'scale(1.5)';
        setButtonActive(true);
    }

    function handleOnMouseLeave() {
        backgroundImageRef.current.style.transform = 'scale(1)';
        setButtonActive(false);
    }
    function handleOnClick() {
        if(expanded) return collapseProject(backgroundImageRef.current)
        expandProject(backgroundImageRef.current, index)
    }

    return(
        <ThemeProvider theme={themeContext.theme}>
            <DisplayContainer ref={containerRef} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} expanded={expanded} >
                <BackgroundContainer onClick={handleOnClick}>
                    <BackgroundImage ref={backgroundImageRef} backgroundImage={ banner }/>
                    <Filter />
                </BackgroundContainer>
                <CenteredContent>
                    <Title>{ title }</Title>
                    <Subtitle>{ subtitle }</Subtitle>
                    <Button
                        display={buttonActive} 
                        onClick={handleOnClick}
                    >
                        {expanded ? 'X' : 'Show more!'}
                    </Button>
                </CenteredContent>
            </DisplayContainer>  
        </ThemeProvider>
    )
};