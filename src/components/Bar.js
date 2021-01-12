import React from 'react'
import styled from 'styled-components'
import '@fontsource/roboto'

import infinitySvg from '../images/infinity.svg'


export default function Bar(props) {
console.log(props.width)
    const InfinitySVG = styled.img`
        position: relative;
        top: 2rem;
        right: 0.5rem;
    `

    const Container = styled.div`
        display:flex;
        align-items: baseline;
        width: 100%;
    `

    const StyledBar = styled.div`
        height:4rem;
        width:${props.width};
        background-color: ${props.color};
        border: 1px solid #707070;
        filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.9));
        margin: 1rem 1.5rem 0 1rem;
    `

    const Text = styled.div`
        font-family: Roboto;
        font-weight: normal;
        font-size: 16px;
        text-align: left;
        color: #707070;
        position: relative;
        top: 1.2rem;
    `

    const Skill = styled.span`
        font-family: Roboto;
        font-weight: bold;
        font-size: 20px;
        text-align: left;
        color: #e8e8e5;
        text-shadow: 0px 3px 7px rgba(0, 0, 0, 0.43);
        position: relative;
        left: 4rem;
        top: 1.2rem;
    `

    return (
        <Container>
            <StyledBar>
                <Skill>{props.skill}</Skill>
            </StyledBar>
            {props.skill === "EMPATHY" ? 
                <InfinitySVG src={infinitySvg} /> : 
                <Text>{props.rating}</Text> 
            }
            
        </Container>
    )
}