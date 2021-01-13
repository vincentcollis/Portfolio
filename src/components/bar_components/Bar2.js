import React from 'react'
import styled from 'styled-components'
import '@fontsource/roboto'



export default function Bar() {

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
        width:28rem;
        background-color: #b399c9;
        border: 1px solid #000;
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
                <Skill>RUBY</Skill>
            </StyledBar>
            <Text>8.7/10</Text> 
        </Container>
    )
}