import React from 'react';
import styled from 'styled-components';


const Hexagon = styled.div`
    width: 100px;
    height: 200px;
    overflow: hidden;
    visibility: hidden;
    transform: rotate(120deg);
`
const HexagonInside = styled.div`
    width: 100%;
    height: 100%;
    background: green;
    transform: rotate(-60deg);
    overflow: hidden;
    visibility: hidden;
`
const Image = styled.div`
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: contain;
    background-color: ${(props) => props.theme.darkest};
    background-image: url(${({src}) => src});
    transform: rotate(-60deg);
    visibility: visible;
`

export default function HexagonImage({src}) {
    return(
            <Hexagon>
                <HexagonInside>
                    <Image src={src} />
                </HexagonInside>
            </Hexagon>            
    )
};
