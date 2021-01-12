import React from 'react'
import styled from 'styled-components'
import '@fontsource/roboto'

import checksquare1 from '../images/checksquare1.svg'
import checksquare2 from '../images/checksquare2.svg'
import checksquare3 from '../images/checksquare3.svg'
import angleright from '../images/angleright.svg'

//// Styled Components ////
const Layout = styled.div`
    grid-column: 1/8;
    grid-row: 3/4;
    margin: 8rem 0 0 12rem;
    display:flex;
`;

const LabelBox = styled.div`
    font-family: "Roboto";
    width: 24.3rem;
    height: 6rem;
    border-radius: .4rem;
    box-shadow:${props => props.labeltwo? null:" 0px 3px 30px #c4c2c2"};
    filter: ${props => props.labeltwo ? "drop-shadow(0px 0px 9px rgba(0,0,0,0.65))":null};
    
    background-color: white; 
    margin-top: ${props => props.labelone ? "0px" : null};
    margin-top: ${props => props.labeltwo ? "30px" : null};
    margin-top: ${props => props.labelthree ? "10px" : null};
    
    display:flex;
    box-sizing: border-box;
    margin-right: 4rem;
    padding: 1.5rem 0 0 2rem;
`

const CheckBoxSVG = styled.img`
    margin: .18rem 1.5rem 0 0;
    height: 2.1rem;
    width: 2.1rem;
    /* list-style: none; */
`

const ArrowSVG = styled.img`
    margin: .6rem 0 0 1rem;
    height: 1.7rem;
    width: 1.7rem;
    /* list-style: none; */
`

//// End of Styled Components ////

//// Text Stylings ////

const headingStyle = {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "1.5rem",
    textAlign: "left",
    color: "#707070",

}

const taglineStyle = {
    fontFamily: "Roboto",
    fontWeight: "normal",
    fontSize: "1.2rem",
    textAlign: "left",
    color: "#707070",
    // marginTop: "1rem"
}



//// End of Text Stylings ////

export default function PageBreak1() {
    return (
        <Layout>
            <LabelBox labelone>
                <CheckBoxSVG src={checksquare1}/>
                <div>
                    <span style={headingStyle}> POLITICO </span>
                    <br/>
                    <span style={taglineStyle}> Bringing your values to life </span>
                </div>
                <ArrowSVG src={angleright}/>
            </LabelBox>
            <LabelBox labeltwo>
                <CheckBoxSVG src={checksquare2}/>
                <div>
                    <span style={headingStyle}> WEB DEVELOPER </span>
                    <br/>
                    <span style={taglineStyle}> Powering your campaigns </span>
                </div>
                <ArrowSVG src={angleright}/>
            </LabelBox>
            <LabelBox labelthree> 
                <CheckBoxSVG src={checksquare3}/>
                <div>
                    <span style={headingStyle}> FREELANCER </span>
                    <br/>
                    <span style={taglineStyle}> I’d love to support your team </span>
                </div>
                <ArrowSVG src={angleright}/>
            </LabelBox>
        </Layout>
    )
}
