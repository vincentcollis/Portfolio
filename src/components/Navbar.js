import React from 'react'
import codeIcon from '../images/code_icon.svg'
import styled from 'styled-components'
import '@fontsource/roboto'
// import breakpoint from '../assets/mediaQueries'


const TopBox = styled.div`
    width: 1680px;
    height:4rem;
    position:fixed;
    background-color:white;
    z-index: 10; 
`

const HeaderLayout = styled.nav`
    display:flex;
    width: 100%;
    max-width: 1680px;
    margin: .7rem 0 0 0;
    
    justify-content: space-between;
    align-items: center;
    position:fixed;

    height: 60px;

    box-sizing: border-box;
    z-index: 20; 

    background-color: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.09);
`;

const Name = styled.div`
    font-family: Roboto;
    font-weight: normal;
    font-size: 2rem;
    /* line-height: 32px; */
    text-align: left;
    color: #707070;
    margin: 0 42rem 0 0rem;
    list-style: none;
    white-space: nowrap;
`


const Logo = styled.img`
    margin: 0 0 0 3rem ;
    height: 3rem;
    width: 3rem;
    list-style: none;
`

const Ul = styled.ul`
    display: flex;
    align-self: ${props => props.buttons ? 'flex-end' : null};
    margin-right: 3rem; 
`

const Button = styled.button`
    text-decoration: none;
    font-family: "Roboto";
    display:block;
    border: 3px solid #707070;
    padding: 2px 32px;
    text-align: center;
    margin-left: 20px;
    font-size: 1.25rem;
    /* font-size: 20px; */
    border-radius: 5px;
    background-color: white;
    opacity: .7;
    transition: .5s;
        &:hover{
            background: #00ace6;
        }
    white-space: nowrap;
`;

export default function NavBar() {
    
    //Navigation function
    function scroll(event){
        let key = event.target.dataset.nav

        const anchor = document.querySelector(key)
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    

    return (
        <>
            <TopBox/>
            <HeaderLayout>
                <Logo src={codeIcon}/>  
                <Name data-nav="#home" onClick={scroll}> Vincent Collis </Name>
                <Ul buttons>
                    <Button data-nav="#about-me" onClick={scroll}>ABOUT ME </Button>
                    <Button data-nav="#skills"  onClick={scroll}> SKILLS </Button>
                    <Button  data-nav="#contact" onClick={scroll}> CONTACT </Button>
                </Ul>
            </HeaderLayout>
        </>
    )
}



