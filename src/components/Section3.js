import React from 'react'
import styled from 'styled-components'
import Bar from '../components/Bar'
import "@fontsource/roboto" 

const BarContainer = styled.div`
    grid-column: 1/8 ;
    grid-row : 6/7;
    margin-top: 14rem;
    display: flex;
    flex-direction: column;
`
const TagLine = styled.span`
    font-family: Roboto;
    font-weight: normal;
    font-size: 16px;
    text-align: left;
    color: #707070;
    margin: 1rem 0 0 50rem;
`

const SectionContainer = styled.div`
    grid-column: 4/8 ;
    grid-row : 6/7;
    margin-top: 5rem;
    display:flex;
    justify-content: center;
    z-index:1;
`;

const TextContainer = styled.div`
    display:flex;
    
    margin: 6rem 1rem 0 0;
    width: 40rem;
    height: 16rem;
    background: transparent;
    position: relative;
    right: 6.3rem;
`

const Line = styled.div`
    height: 5rem;
    top: -3rem;
    position: relative;
    right: -3rem;
    width: 0px;
    background: transparent;
    border: 1px solid rgba(0, 0, 0, 0.47);
`

const StyledDiv = styled.div`
    
    font-family: Roboto;
    font-weight: normal;
    font-size: 1rem;
    width: 5rem;
    /* text-align: left; */
    color: #000;
    text-shadow: 0px 3px 15px rgba(0, 0, 0, 0.16);
    
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    position: relative;
    top: -4rem;
    left: -1.35rem;
`


const RotatedDiv = styled.div`
    display: flex;
    flex-direction:column-reverse;
`

const TextDiv = styled.div`
    position: relative;
    top: 2rem;
`

const HeadingOne = styled.div`
    font-family: "Roboto";
    font-size: 2.4rem;
    font-weight:bold;
`

const Paragragh = styled.div`
    font-family: Roboto;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 24px;
    text-align: left;
    color: #000;
    text-shadow: 0px 3px 15px rgba(0, 0, 0, 0.16);
    margin: 1rem 12rem 0 0;
`

export default function Section3() {
    
    // Hash of skills to inject into Bar Component
    const bars = [
        {skill:"HTML & CSS", color:"#bbbfca", rating:"9.0/10", width:"30rem"},
        {skill:"RUBY", color:"#b399c9", rating:"8.7/10", width:"28rem"},
        {skill:"JAVASCRIPT", color:"#707070", rating:"9.5/10", width:"34rem"},
        {skill:"UX/UI DESIGN", color:"#495464", rating:"9.1/10", width:"32rem"},
        {skill:"EMPATHY", color:"#5bbcbf", rating:"", width:"75rem"}
    ]

        
    return (
        <>
            <BarContainer id="skills">
                {bars.map((x,i) => <Bar 
                    key={i} skill= {x.skill} color={x.color} rating={x.rating} width={x.width}
                />)}
                <TagLine>* Empathy is the key to any successful partnership</TagLine>
            </BarContainer>
            <SectionContainer>
                <TextContainer>
                    <RotatedDiv>
                        <Line/>
                        <StyledDiv>MY PURPOSE</StyledDiv>
                    </RotatedDiv>
                    <TextDiv>
                        <HeadingOne> 
                            I create beautiful interactive web applications.
                        </HeadingOne>

                        <Paragragh>
                            Our web presence is meant to drive audiences to engage, connect and share our values. Im here to help you make that connection. 
                        </Paragragh>

                    </TextDiv>
                </TextContainer>

            </SectionContainer>
        </>
    )
}





