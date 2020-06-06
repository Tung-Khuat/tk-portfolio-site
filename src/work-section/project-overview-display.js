import React, { useRef, useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { Title, Subtitle, FilterLayer } from '../styled-components/basic-components';
import HexagonButton from '../buttons/hexagon-button';
import { screenWidth } from '../styled-components/media-breakpoints';
import { ThemeContext } from '../theme/theme-context';



const DisplayContainer = styled.div`
    color: ${(props) => props.color || props.theme.lightest};
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
    cursor: pointer;
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
    const backgroundImageRef = useRef();
    const containerRef = useRef();
    const { banner, title, subtitle } = project;
    const [showButton, setShowButton] = useState(false);
    const themeContext = useContext(ThemeContext)

    useEffect(() => {
        const displayContainer = containerRef.current;

        if(expanded){
            const isHidden = checkUnselected();
            if (isHidden) {
                displayContainer.style.display = "none";
            } 
            document.getElementById("portfolio").scrollIntoView()

            if(window.innerWidth < screenWidth.medium) {
                displayContainer.style.height = '30vh';
            } else {
                setTimeout(() => {
                    displayContainer.style.height = '30vh';                
                }, 1000);
            }
        }
        if(!expanded){
            displayContainer.style.height = '110vh';
            displayContainer.style.display = 'block';
        }
    }, [expanded, checkUnselected])

    function handleOnClick() {
        if(expanded) return collapseProject()
        expandProject(backgroundImageRef.current, index)
    }
    
    function handleOnMouseEnter() {
        backgroundImageRef.current.style.transform = "scale(1.5)";
        setShowButton(true);
    }

    function handleOnMouseLeave() {
        backgroundImageRef.current.style.transform = "scale(1)";
        setShowButton(false);
    }

    return(
        <DisplayContainer ref={containerRef} expanded={expanded} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
            <BackgroundContainer onClick={handleOnClick}>
                <BackgroundImage ref={backgroundImageRef} backgroundImage={ banner }/>
                <FilterLayer />
            </BackgroundContainer>
            <CenteredContent onClick={handleOnClick}>
                <Title>{ title }</Title>
                <Subtitle>{ subtitle }</Subtitle>
                {
                    !expanded && (
                        <HexagonButton fontSize={17} active={ window.innerWidth < screenWidth.medium ? true : showButton}>More</HexagonButton>
                    )
                }
                {
                    expanded && window.innerWidth < screenWidth.medium && (
                        <HexagonButton onClick={collapseProject} active={expanded} fontSize={13} bgColor={themeContext.theme.highlight}><i class="fas fa-times" style={{fontSize:"19px"}}/></HexagonButton>
                    )
                }
            </CenteredContent>
        </DisplayContainer>  
    )
};