import styled from 'styled-components';

export const Wrapper = styled.div`
    color: ${(props) => props.color || props.theme.darkest};
    background: ${(props)=>props.background || props.theme.background};
`
export const Button = styled.button`
    padding: 10px 20px;
    background: ${(props) => props.backgroundColor || props.theme.highlight};
    color: ${(props) => props.color || props.theme.lightest};
    border: none;
    border-radius: 5px;
    margin: 10px;
    cursor: pointer;
    transition: 1s width cubic-bezier(.77,0,.175,1);
    font-weight: bold;
`
export const Title = styled.div`
    font-size: 29px; 
    font-weight: bold;   
`
export const Subtitle = styled.div`
    font-size: 19px;
`
export const HighlightedLink = styled.a`
    color: ${(props) => props.color || props.theme.highlight};
`
export const AbsCenter = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
`
export const FilterLayer = styled.div`
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