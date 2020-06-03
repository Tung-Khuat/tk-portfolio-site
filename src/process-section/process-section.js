import React, { useContext, useState, useRef, useEffect } from 'react';
import { ThemeContext } from '../theme/theme-context';
import styled from 'styled-components';
import SideTitleSplitSection from '../section-template/side-title-split-section';
import { Wrapper } from '../styled-components/basic-components';

export default function ProcessSection() {
    const themeContext = useContext(ThemeContext);
    
    return (
            <SideTitleSplitSection
                title="Process"
                titleBackground={ themeContext.theme.highlight }
                titleFontColor={ themeContext.theme.lightest }
                underlineColor={ themeContext.theme.lightest }
                navFontColor={ themeContext.theme.darkest }
            >
                <ProcessContent />
            </SideTitleSplitSection>            
    )
};

function ProcessContent () {
    const itemRef = useRef()

    return (
        <Wrapper >
            Hi
        </Wrapper>
    )
}
