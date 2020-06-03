import React, { useContext, useState, useRef, useEffect } from 'react';
import { ThemeContext } from '../theme/theme-context';
import styled from 'styled-components';
import SideTitleSplitSection from '../section-template/side-title-split-section';
import CirclesCanvas from './circles-canvas';
import { Wrapper } from '../styled-components/basic-components';

const PanelItem = styled.div`
    width: 50%;
    height: 50%;
    cursor: pointer;
    transition: 1s width cubic-bezier(.77,0,.175,1), 1s height cubic-bezier(.77,0,.175,1); 
    background-color: tomato;
    `
const PanelContainer = styled(Wrapper)`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    `


export default function ExtraSection() {
    const themeContext = useContext(ThemeContext);
    const [expanded, setExpanded] = useState(false);
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);
    const panelItemList = [<CirclesCanvas sizeChanged={expanded} bgColor={themeContext.theme.darkest}/>, <div>1</div>, <div>2</div>, <div>3</div>]
    
    function handleOnclick(itemIndex){
        setSelectedItemIndex(itemIndex);
        setExpanded(!expanded);
    }
    function checkUnselected(index) {
        if(index === selectedItemIndex)
            return false
        return true
    }
    
    return(
            <SideTitleSplitSection
                title="Extras"
                titleBackground={ themeContext.theme.highlight }
                titleFontColor={ themeContext.theme.lightest }
                underlineColor={ themeContext.theme.lightest }
                navFontColor = { themeContext.theme.darkest }
                noPadding
            >
                <PanelContainer>
                    {
                        panelItemList.map((element, index)=>(
                            <SplitPanelItem index={index} onClickFn={()=>handleOnclick(index)} expanded={expanded} checkUnselected={()=>checkUnselected(index)}>
                                {element}
                            </SplitPanelItem>
                        ))
                    }
                </PanelContainer>
            </SideTitleSplitSection>            
    )
};

function SplitPanelItem ({children, onClickFn, expanded, checkUnselected}) {
    const itemRef = useRef()

    useEffect(() => {
        const itemEl = itemRef.current;
        if(expanded) {
            const isHidden = checkUnselected();
            console.log(checkUnselected)
            if(isHidden){
                itemEl.style.display = "none";
            }
            itemEl.style.width = "100%";
            itemEl.style.height = "100%";
        }
        if(!expanded) {
            itemEl.style.display = "block";
            itemEl.style.width = "25px";
            itemEl.style.height = "25px";
        }
    }, [expanded, checkUnselected])

    return (
        <PanelItem ref={itemRef} onClick={onClickFn}>{children}</PanelItem>
    )
}