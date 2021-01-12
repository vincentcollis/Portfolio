import React from 'react'
import styled from 'styled-components'

import ColorBlock from './ColorBlock'
import '@fontsource/roboto'

import linkedinIcon from '../images/linkedin.svg'
import facebookIcon from '../images/facebook-square.svg'
import instagramIcon from '../images/instagram.svg'
import twitterIcon from '../images/twitter-square.svg'
import mediumIcon from '../images/medium.svg'

import gitHubIcon from '../images/github-alt.svg'
import codeMergeIcon from '../images/code-merge.svg'
import angleright from '../images/angleright.svg'

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"


const SectionContainer = styled.div`
    grid-column: 1/8 ;
    grid-row : 2/3;
    margin-top: 8rem;
    display:flex;
`;

const StyledDiv = styled.div`
    padding: 5rem 0 0 5rem;
    /* margin-right: 5rem;  */
    /* margin-top: 5rem; */
    /* padding-right: 15rem; */
    box-sizing:border-box;
    
`

const ColorPalette = styled.div`
    margin-left: 6rem;
    box-sizing:border-box;
`

// colors displayed in color palette
const colorBlockColors = [
    "#B399C9",
    "#707070",
    "#5BBCBF",
    "#495464",
    "#BBBFCA",
    "#000000",
]

const Name = styled.span`
    font-family: Roboto;
    font-weight: normal;
    font-size: 6.5rem;
    /* line-height: 32px; */
    text-align: left;
    color: #707070;
    white-space: nowrap;
`

const Block1 = styled.span`
    font-family: Roboto;
    font-weight: normal;
    font-size: 3.2rem;
    /* line-height: 40px; */
    text-align: left;
    color: #707070;
    white-space: nowrap;
`

const Block2 = styled.span`
    font-family: Roboto;
    font-weight: normal;
    font-size: 2.6rem;
    /* line-height: 40px; */
    text-align: left;
    color: #707070;
    white-space: nowrap;
`

const Block3 = styled.span`
    font-family: Roboto;
    font-weight: normal;
    font-size: 2.6rem;
    /* line-height: 40px; */
    text-align: left;
    color: #707070;
    white-space: nowrap;
`

const Block4 = styled.span`
    font-family: Roboto;
    font-weight: normal;
    font-size: 1.6rem;
    /* line-height: 24px; */
    text-align: left;
    color: #707070;
    white-space: nowrap;
`;

const Footer = styled.div`
    grid-column: 1/8 ;
    grid-row : 3/4;

    display:flex;
    box-sizing: border-box;
    justify-content: space-between;
`;

const IconPalette = styled.div`
    margin: 0 8rem 0 0rem; 
    box-sizing:border-box;
    display: flex;
    
`
const SocialMediaIcon = styled.img`
    height: 2rem;
    width: 2rem;
    margin: 0 2rem 0 0;
    list-style: none;
`

const GitHubIcons = styled.img`
    height: 5rem;
    width: 5rem;
    margin: ${props => props.codeMerge ? "0 1rem 0 1rem" : null};
`
const iconBlocks = [
    {
        name: "linkedIn",
        source: linkedinIcon 
    },
    {
        name: "medium",
        source: mediumIcon 
    },
    {
        name: "facebook",
        source: facebookIcon 
    },
    {
        name: "instagram",
        source: instagramIcon 
    },
    {
        name: "twitter",
        source: twitterIcon 
    },
]


const Quote = styled.div`
    font-family: Roboto;
    font-weight: normal;
    font-size: 16px;
    text-align: left;
    color: #707070;
    margin: 0 0 0 10.8rem;
`

const GitHub = styled.div`
    display: flex;
    box-sizing: content-box;
    margin:3rem 0 0 7.5rem;
`

const GitHubIconsContainer = styled.div`
    display:flex;
    flex-direction: column;
`

const ArrowSVG = styled.img`
    margin: 6.85rem 0 0 1rem;
    height: 1.7rem;
    width: 1.7rem;
    /* list-style: none; */
`
const GitHubText = styled.span`
   font-family: Roboto;
    font-weight: normal;
    font-size: 2rem;
    text-align: left;
    color: #707070; 
    margin: 6.6rem 0 0 0;
`

const handleClick = (event) =>{
    let key = event.target.dataset.id
    let url = []    

    switch (key) {
        case 'linkedIn':
            url = {address: 'https://www.linkedin.com/in/vincentcollis/'}
            break;
        case 'medium':
            url = {address: 'https://vincentcollis.medium.com/'}
            break;
        case 'facebook':
            url = {address: 'https://www.facebook.com/VincentCollis00'}
            break;
        case 'instagram':
            url = {address: 'https://www.instagram.com/hasnolimit_/'}
            break;
        case 'twitter':
            url = {address: 'https://twitter.com/VincentCollis/'}
            break;
        case 'github':
            url = {address: 'https://github.com/vincentcollis'}
            break
        default:
            break;
    }
    window.location.href=`${url.address}`
}


export default function Section1() {
    // Get UI Image
    const data = useStaticQuery(graphql`
        {
            file(relativePath: {eq: "ux_artboards.png"}) {
                childImageSharp {
                    fixed(width: 700, quality: 100) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    

    return (
        <>
        <SectionContainer>
            <Img fixed={data.file.childImageSharp.fixed} />
            <ColorPalette>
                {colorBlockColors.map((hex,i) => <ColorBlock key={i} color = {hex}/>)}
            </ColorPalette>
            <StyledDiv>
                <Name> Vincent Collis </Name>
                <p/>
                <Block1> {"<"}h1{">"} FULL STACK DEVELOPER </Block1>
                <p/>
                <Block2> {"<"}h2{">"} SOFTWARE ENGINEER </Block2>
                <p/>
                <Block3> WEB DEVELOPER </Block3>
                <p/>
                <Block4>
                    FULL STACK DEVELOPER WITH 10 YEARS <br/>
                    EXPERIENCE IN THE AGILE DEVELOPMENT AND  <br/>
                    IMPLEMENTATION OF DIGITAL CAMPAIGNS AND  <br/>
                    WEB DEVELOPMENT IN POLITICS. <br/>
                </Block4>
                <GitHub >
                    <GitHubIconsContainer>
                        <GitHubIcons src={gitHubIcon}/>
                        <GitHubIcons codeMerge src={codeMergeIcon}/>
                    </GitHubIconsContainer>
                    <GitHubText data-id="github" onClick={handleClick}>
                        Go To My GitHub
                    </GitHubText>
                    <ArrowSVG src={angleright} data-id="github" onClick={handleClick}/>
                </GitHub>
            </StyledDiv>
        </SectionContainer>
        <Footer>
            <Quote>POWERED BY PASSION</Quote>
            <IconPalette>
                {iconBlocks.map((icon, i) => <SocialMediaIcon key={i} src={icon.source} data-id={icon.name} onClick={handleClick}/>)}
            </IconPalette>
        </Footer>
        </>
    )
}