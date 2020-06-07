import React, { useContext, useState, Suspense } from 'react';
import { ThemeContext } from '../theme/theme-context';
import SideHeaderSplitSection from '../section-template/side-title-split-section';
import data from '../../data/main-projects.json';
import HexagonButton from '../buttons/hexagon-button';
import HexagonLoadingIndicator from '../loading-indicators/hexagon-loading-indicator';
import { checkElementInView } from '../helpers/domRelated.js';

const ProjectOverviewDisplay = React.lazy(() => 
    import('./project-overview-display'),
);
const ProjectFullInfo = React.lazy(() => 
    import('./project-full-info'),
);

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
            <Suspense fallback={<HexagonLoadingIndicator/>}>
                {
                    data[selectedProjectIndex] && expanded && (
                        <ProjectFullInfo project={data[selectedProjectIndex]}/>
                    )
                }
            </Suspense>
           
        </SideHeaderSplitSection>            
    )
};