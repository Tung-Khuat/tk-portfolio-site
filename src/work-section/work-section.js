import React, { useContext, useState } from 'react';
import { ThemeContext } from '../theme/theme-context';
import SideHeaderSplitSection from '../section-template/side-title-split-section';
import ProjectOverviewDisplay from './project-overview-display';
import ProjectFullInfo from './project-full-info';
import data from '../../data.json'

export default function WorkSection() {
    const themeContext = useContext(ThemeContext);
    const [expanded, setExpandState] = useState(false);
    const [selectedProjectIndex, setSelectedProjectIndex] = useState();

    function expandProject(element, returnedIndex) {
        const boundRect = element.getBoundingClientRect();
        element.scrollIntoView();

        setSelectedProjectIndex(returnedIndex)

        //Expand instantly if element is in view
        if(boundRect.top < 0 && boundRect.bottom > window.innerHeight) {
            setExpandState(true);
        } else {
            setTimeout(() => {
                setExpandState(true);
            }, 400);
        }
    }

    function collapseProject(element) {
        setExpandState(false);
        setTimeout(() => {
            element.scrollIntoView();
        }, 100);
    }

    function checkUnselected(index) {
        if(index === selectedProjectIndex)
            return false
        return true
    }
    
    return(
        <SideHeaderSplitSection
            title="Work"
            titleBackground={ themeContext.theme.background }
            titleTextColor={ themeContext.theme.foreground }
            underlineColor={ themeContext.theme.highlight }
            navTextColor = { themeContext.theme.foreground }
            expanded={expanded}
            noPadding
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
                    <ProjectFullInfo project={data[selectedProjectIndex]}>   </ProjectFullInfo>
                )
            }
        </SideHeaderSplitSection>            
    )
};