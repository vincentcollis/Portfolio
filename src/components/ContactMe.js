import React from 'react'
import styled from 'styled-components'
import '@fontsource/roboto'

import phoneIcon from '../images/phone-square-alt.svg'
import mailIcon from '../images/mail.svg'
import linkedinIcon from '../images/linkedin.svg'
import facebookIcon from '../images/facebook-square.svg'
import instagramIcon from '../images/instagram.svg'
import twitterIcon from '../images/twitter-square.svg'

const SectionContainer = styled.div`
    grid-column: 2/7 ;
    grid-row : 8/9;
    
    margin-top: 6rem;
    display: flex;
    /* flex-direction: column; */
`

const TextBox = styled.div`
    width: 30rem;
    height: 276px;
    background: #fff;
    border: 5px solid #495464;
    box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.64);

    font-family: Roboto;
    font-weight: normal;
    font-size: 52px;
    text-align: left;
    color: #000;

    margin: 12rem 0 0 0;
    padding: 2rem 0 0 2rem;
    box-sizing: border-box;
`

const IconPalette = styled.div`
    margin: 0 0 0 5rem; 
    box-sizing:border-box;
    display: flex;
    flex-direction: column;
`

const ContactInfo = styled.div`
    box-sizing:border-box;
    flex-direction: column;
    display: flex;
`

const Icon = styled.img`
    height: 4rem;
    width: 4rem;
    margin: 2.5rem 0 0 0;
    list-style: none;
`
const Text = styled.div`
    height: 3rem;
    font-family: Roboto;
    font-weight: normal;
    font-size: 32px;
    text-align: left;
    color: #707070;
    margin: 3.5rem 0 0 1rem;
`


// icons displayed in icon palette
const iconBlocks = [
    {
        name: "linkedIn",
        source: linkedinIcon 
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
    {
        name: "phone",
        source: phoneIcon 
    },
    {
        name: "mail",
        source: mailIcon 
    },
]

const informationBlocks =[
    '+1-646-872-9355',
    'VINCE@WEARETITLEFIGHT.COM',
    'LINKEDIN.COM/IN/VINCENTCOLLIS',
    'FACEBOOK.COM/VINCENTCOLLIS00',
    '@HasNoLimit_',
    '@VincentCollis',
]

const Spacer = styled.div`
    grid-column: 1/8 ;
    grid-row : 9/10;
    
    margin-top:7rem;
    height: .01rem;
    width: 100%;
    
`

const handleClick = (event) =>{
    let key = event.target.dataset.id
    let url = []    

    switch (key) {
        case 'linkedIn':
            url = {address: 'https://www.linkedin.com/in/vincentcollis/'}
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

export default function ContactMe() {

    return (
        <>
        <SectionContainer id="contact">
            <TextBox>
                I WOULD LOVE <br/>
                TO BE A PART <br/>
                OF YOUR TEAM
            </TextBox>
            <IconPalette>
                {iconBlocks.map((icon, i) => <Icon key={i} src={icon.source} onClick={handleClick} data-id={icon.name}/>)}
            </IconPalette>
            <ContactInfo>
                {informationBlocks.map((text, i) => <Text key={i} >{text}</Text>)}
            </ContactInfo>
        </SectionContainer>
        <Spacer/>
        </>
    )
}
