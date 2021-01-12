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

// Hash of skills to inject into Bar Component
const bars = [
    {skill:"HTML & CSS", color:"rgb(187, 191, 202)", rating:"9.0/10", width:"30em"},
    {skill:"RUBY", color:"rgb(179, 153, 201)", rating:"8.7/10", width:"28em"},
    {skill:"JAVASCRIPT", color:"#707070", rating:"9.5/10", width:"34em"},
    {skill:"UX/UI DESIGN", color:"#495464", rating:"9.1/10", width:"32em"},
    {skill:"EMPATHY", color:"#5bbcbf", rating:"", width:"75em"}
]

export default function Section3() {
    console.log(bars[0].skill)
    return (
        <>
            <BarContainer id="skills">
                {/* on deployment this code does not work */}
                {/* {bars.map((x,i) => <Bar 
                    key={i} skill= {x.skill} color={x.color} rating={x.rating} width={x.width}
                />)} */}

                <Bar key='1' skill= {bars[0].skill} color="rgb(187, 191, 202)" rating={bars[0].rating} width="30em"/>
                
                <Bar key='2' skill= {bars[1].skill} color="rgb(179, 153, 201)" rating={bars[1].rating} width="28em"/>
                {/* <Bar skill= {bars[2].skill} color={bars[2].color} rating={bars[2].rating} width={bars[2].width}/>
                <Bar skill= {bars[3].skill} color={bars[3].color} rating={bars[3].rating} width={bars[3].width}/>
                <Bar skill= {bars[4].skill} color={bars[4].color} rating={bars[4].rating} width={bars[4].width}/> */}

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





