import styled from 'styled-components';

export const Wrapper = styled.div`
    color: ${(props) => props.color || props.theme.foreground};
    background: ${(props)=>props.background || props.theme.background};
`
export const Button = styled.button`
    padding: 10px 20px;
    background: ${(props) => props.backgroundColor || props.theme.highlight};
    color: ${(props) => props.color || props.theme.background};
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