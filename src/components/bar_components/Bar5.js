import React from 'react'
import styled from 'styled-components'
import '@fontsource/roboto'

import infinitySvg from '../../images/infinity.svg'


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
        width:75rem;
        background-color: #5bbcbf;
        border: 1px solid #000;
        filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.9));
        margin: 1rem 1.5rem 0 1rem;
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
                <Skill>{`EMPATHY`}</Skill>
            </StyledBar>
            <InfinitySVG src={infinitySvg} />
        </Container>
    )
}