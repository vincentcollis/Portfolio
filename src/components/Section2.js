import React from 'react'
import styled from 'styled-components'
import "@fontsource/roboto" 

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const SectionContainerOne = styled.div`
    grid-column: 1/8 ;
    grid-row : 4/5;
    margin-top: 8rem;
`;

const SectionContainerTwo = styled.div`
    grid-column: 1/8 ;
    grid-row : 4/5;
    margin-top: 12rem;
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

const PictureContainer = styled(Img)`
    width: 15rem;
`


export default function Section2() {
    // Get code icons background image
    const data = useStaticQuery(graphql`
    {
        image1: file(relativePath: {eq: "code_language_icons.png"}) {
            childImageSharp {
                fixed(width: 1580, quality: 100) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        image2: file(relativePath: {eq: "profile_pic.png"}) {
            childImageSharp {
                fixed(width: 400, quality: 100) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
    `)

    return (
        <>
            <SectionContainerOne  id='about-me'>
                <Img fixed={data.image1.childImageSharp.fixed} />
            </SectionContainerOne>

            <SectionContainerTwo>
                
                <TextContainer>
                    <RotatedDiv>
                        <Line/>
                        <StyledDiv>ABOUT ME</StyledDiv>
                    </RotatedDiv>
                    <TextDiv>
                        <HeadingOne>
                        Providing presidential level quality up and down the ballot. 
                        </HeadingOne>
                        {/* <br/> */}
                        <Paragragh>
                        Software Developer working in Democratic Politics for 10 years specializing in the the implementation of digital campaigns and web development. 
                        </Paragragh>
                    </TextDiv>
                </TextContainer>
                <PictureContainer fixed={data.image2.childImageSharp.fixed} />
                
            </SectionContainerTwo>
        </>
    )
}





