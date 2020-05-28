import React, { useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ThemeContext } from '../theme/theme-context';
import { Wrapper, Button } from '../styled-components/basic-components'

const ProjectFullInfoWrapper = styled(Wrapper)`
    padding: 50px;
    min-height: 70vh;
    position: relative;
`
const BasicInfoWrap = styled.div`
    background: ${(props) => props.highlight};
`
const ButtonGroupWrap = styled.div`
    button:first-child {
        margin-left: 0;
    }
    button:last-child {
        margin-right: 0;
    }
    button {
        width: 100%;
    }
    display: flex;
    align-content: stretch;
    justify-content: center;
`

export default function ProjectFullInfo({project}) {
    const themeContext = useContext(ThemeContext);
    return (
        <ThemeProvider theme={themeContext.theme}>
            <ProjectFullInfoWrapper>
                <BasicInfoWrap>
                    <h1>{project.title}</h1>
                    <h3>{project.subtitle}</h3>
                    <p>{project.description}</p>
                </BasicInfoWrap>
                <ButtonGroupWrap>
                    <Button>SOURCE</Button>
                    <Button>LIVE DEMO</Button>
                </ButtonGroupWrap>
            </ProjectFullInfoWrapper>
        </ThemeProvider>
    )
}