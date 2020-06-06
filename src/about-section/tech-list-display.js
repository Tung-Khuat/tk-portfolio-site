import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../theme/theme-context';
import { Wrapper } from '../styled-components/basic-components';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const TechListContainer = styled(Wrapper)`
    width: 100%;
    margin: 30px 0;
`
const TechGroup = styled.div`
    min-width: 200px;
    width: 100%;
`
const TechIconWrap = styled.div`
    min-width: 200px;
`
const TechTitleWrap = styled.div`
    width: 100%;
    span:not(:first-of-type):before {
        content: ', ';
    }
    font-weight: bold;
    margin-bottom: 10px;
`
const TechGroupDetails = styled.div`
    display: block;
`
const TechIcon = styled.div`
    background-image: url(${({backgroundImage}) => backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 48px;
    height: 48px;
    display: inline-block;
    margin-right: 7px;
    &:hover:after {
        content: '${({iconLabel}) => iconLabel}';
        display: block;
        padding: 5px 10px;
        border-radius: 5px;
        position: absolute;
        bottom: -0.7em;
        z-index: 10;
        font-size: 0.7rem;
        background-color: rgba(0, 0, 0, 0.85);
        color: #fff;
    }
`

export default function TechListDisplay({techGroupList}) {
    const theme = useContext(ThemeContext);

    return (
        <TechListContainer color={theme.darkest} underlineColor={theme.highlight}>
            {
                data && data.map((techGroup, index) => (
                    <ExpansionPanel>
                        <ExpansionPanelSummary key={index} id={`panel-${index}`} expandIcon={<ExpandMoreIcon />}>
                            <TechGroup>
                                <TechIconWrap>
                                    { techGroup.tech.map((tech) => (<TechIcon backgroundImage={`./icons/${tech.icon}.png`} iconLabel={tech.name}/>)) }
                                </TechIconWrap>   
                            </TechGroup>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <TechGroupDetails>
                                <TechTitleWrap>
                                    { techGroup.tech.map((tech) => (<span>{tech.name}</span>)) }
                                </TechTitleWrap> 
                                <p>{techGroup.note}</p>  
                            </TechGroupDetails>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                ))
            }
        </TechListContainer>
    )
} 

const data = [
    {
        tech: [
            {icon: "html", name: "HTML"},
            {icon: "css", name: "CSS"},
            {icon: "javascript", name: "JavaScript"},
        ],
        note: "These are fundamental building block of any website. I especially enjoy making fun animations, effects, and interactions with Html Canvas",
    },
    {
        tech: [
            {icon: "bootstrap", name: "Bootstrap"},
            {icon: "sass", name: "Sass"},
            {icon: "styled-components", name: "Styled-Components"}
        ],
        note: "For styling, I have experience using many CSS extensions or libraries such Sass and Bootstrap. However, most of my projects use Styled-Components, CSS modules or just MaterialUI components if I want something done fast.",
    },
    {
        tech: [
            {icon: "react", name: "React"},
            {icon: "redux", name: "Redux"},
            {icon: "mui", name: "Material-UI"},
        ],
        note: "",
    },
    {
        tech: [
            {icon: "node", name: "NodeJS"},
            {icon: "mongodb", name: "MongoDB"},
        ],
        note: "Node, express, MongoDB is my stack to make RESTful Backends. At the moment, I am hosting my servers on AWS-Ec2 and my database on their instances or MongoDB's cloud clusters.",
    },
    {
        tech: [
            {icon: "npm", name: "NPM"},
            {icon: "webpack", name: "Webpack"},
            {icon: "git", name: "Git Version Control"},
            {icon: "vs-code", name: "VS-Code"},
            {icon: "jquery", name: "jQuery"},
            {icon: "figma", name: "Figma"},
            {icon: "affinity", name: "Affinity Photo"},
            {icon: "aws", name: "AWS-EC2"},
        ],
        note: "These are some of the other tools and technologies I use.",
    },
    
]
