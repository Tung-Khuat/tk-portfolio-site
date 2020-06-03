import React, { useContext, useState } from 'react';
import { ThemeContext } from '../theme/theme-context';
import SideHeaderSplitSection from '../section-template/side-title-split-section';
import ProjectOverviewDisplay from './project-overview-display';
import ProjectFullInfo from './project-full-info';
import data from '../../data/main-projects.json';
import HexagonButton from '../buttons/hexagon-button';
import { checkElementInView } from '../helpers/domRelated.js'

export default function WorkSection() {
    const themeContext = useContext(ThemeContext);
    const [expanded, setExpandState] = useState(false);
    const [selectedProjectIndex, setSelectedProjectIndex] = useState();

    function expandProject(element, returnedIndex) {
        const isElementInView = checkElementInView(element);

        setSelectedProjectIndex(returnedIndex);

        //Expand instantly if element is in view
        if(isElementInView) {
            setExpandState(true);
        } else {
            setTimeout(() => {
                setExpandState(true);
            }, 100);
        }
    }

    function collapseProject() {
        document.getElementById('portfolio').scrollIntoView(true);
        setTimeout(() => {
            setExpandState(false);
        }, 400);
    }

    function checkUnselected(index) {
        if(index === selectedProjectIndex)
            return false
        return true
    }
    
    return(
        <SideHeaderSplitSection
            title="Portfolio"
            titleBackground={ themeContext.theme.darkest }
            titleFontColor={ themeContext.theme.lightest }
            underlineColor={ themeContext.theme.lightest }
            navFontColor = { themeContext.theme.highlight }
            expanded={expanded}
            noPadding
            middleElement={expanded ? <HexagonButton onClick={collapseProject} active={expanded} fontSize={13} bgColor={themeContext.theme.highlight}><i class="fas fa-times" style={{fontSize:"19px"}}/></HexagonButton> : null}
        >
           {
               data &&
                data.map((project, index)=>(
                    <ProjectOverviewDisplay 
                            project={project}
                            expandProject={expandProject}
                            collapseProject={collapseProject}
                            expanded={expanded}
                            index={index}
                            checkUnselected={()=>checkUnselected(index)}
                    />
                ))
            }
            {
                data[selectedProjectIndex] && expanded && (
                    <ProjectFullInfo project={data[selectedProjectIndex]}/>
                )
            }
        </SideHeaderSplitSection>            
    )
};