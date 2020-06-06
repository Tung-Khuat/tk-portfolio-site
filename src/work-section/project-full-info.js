import React from 'react';
import styled from 'styled-components';
import { Wrapper, UnderlineHighlight, ParagraphMargin } from '../styled-components/basic-components';
import CircleIconButton from '../buttons/circle-icon-button';

const ProjectFullInfoWrapper = styled(Wrapper)`
    padding: 50px;
    min-height: 100vh;
    position: relative;
    background-color: ${(props) => props.theme.background};
    h3 {
        margin-bottom: 10px;
    }
    ul li {
        margin: 10px 20px;
    }
`
const BasicInfoWrap = styled.div`
    background: ${(props) => props.highlight};
    display: flex;
    justify-content: space-between;
    padding-bottom: 50px;
`
const HorizontalLine = styled(UnderlineHighlight)`
    position: relative;
    margin-bottom: 20px;
    padding: 0 50px;
    &:after {
        width: 100%;
        border-width: 2px;
    }
`
const TitleWrap = styled.div`
    background: ${(props) => props.highlight};
    width: 80%;
`
const TechGroupWrap = styled.div`
    margin: 5px 0;
    h4 {
        display: inline;
        margin-right: 5px;
    }
    span:not(:first-of-type):before {
        content: ', ';
    }
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
    align-items: center;
`
const AnchorWrap = styled.a`
    display: block;
    width: 100%;
    margin-left: 7px;
`
const OtherLinkWrap = styled.div`
    margin: 15px 0;
`
const OtherLinkLabel = styled.a`
    color: ${(props) => props.theme.highlight};
    font-weight: bold;
    cursor: pointer;
`

export default function ProjectFullInfo({project}) {
    if(!project){
        return <div>No Information Found!</div>
    }

    function renderList(label, listArray) {
        if(listArray && listArray.length > 0) {
            return (
                <ParagraphMargin>
                    <h3>{label}</h3>
                    <ul>
                        { listArray.map((item) => (<li>{item}</li>)) }
                    </ul>
                </ParagraphMargin>
            )
        }
    }

    return (
        <ProjectFullInfoWrapper>

            <BasicInfoWrap>
                <TitleWrap>
                    <h1>{project.title}</h1>    
                    <h3>{project.subtitle}</h3>
                </TitleWrap>
                <ButtonGroupWrap>
                    <AnchorWrap href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <CircleIconButton><i class="fas fa-eye"></i></CircleIconButton>
                    </AnchorWrap>
                    <AnchorWrap href={project.sourceCodeLink} target="_blank" rel="noopener noreferrer">
                        <CircleIconButton><i class="fas fa-code"></i></CircleIconButton>
                    </AnchorWrap>
                    {
                        project.otherLinks && project.otherLinks.map((link) => (
                            <AnchorWrap href={link.url} target="_blank" rel="noopener noreferrer">
                                <CircleIconButton><i class={link.faIcon}></i></CircleIconButton>
                            </AnchorWrap>                       
                        ))
                    }
                </ButtonGroupWrap>
            </BasicInfoWrap>

            <HorizontalLine/>
            
            <ParagraphMargin>
                <h3>Summary</h3>
                <p>{ project.description }</p>

                {
                    project.otherLinks && project.otherLinks.map((link) => (
                        <OtherLinkWrap>
                            <OtherLinkLabel href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</OtherLinkLabel>
                            {link.note.map((note) => (<p>{ note }</p>))}
                        </OtherLinkWrap>
                                           
                    ))
                }

                <TechGroupWrap>
                    <h4>Frontend</h4>
                    { project.tech && project.tech.frontend.map((tech) => (<span>{tech}</span>)) }
                </TechGroupWrap>
                <TechGroupWrap>
                    <h4>Backend</h4>
                    { project.tech && project.tech.backend.map((tech) => (<span>{tech}</span>)) }
                </TechGroupWrap>
            </ParagraphMargin>
            
            {renderList("Motivation / Learning experience", project.motivation)}
            {renderList("Scope", project.scope)}
            {renderList("Future Development", project.futureDevelopment)}

        </ProjectFullInfoWrapper>
    )
}