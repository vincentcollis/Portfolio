import * as React from "react"
import styled from 'styled-components'

import { Helmet } from "react-helmet"


import Layout from '../components/Layout'
import NavBar from '../components/Navbar'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import PageBreak1 from '../components/PageBreak1'
import Section3 from '../components/Section3'

import ContactMe from '../components/ContactMe'
import "@fontsource/roboto" 

const BreakLine = styled.div`

    margin-top:10rem;
    height: .01rem;
    width: 100%;
    border: 2px solid black;
    background-color: black;
    z-index:1;

    // conditionals must be last in order to render after inital css
    ${props => props.lineOne? "grid-Column: 2/7; grid-Row: 5/6;" : null}
    ${props => props.lineTwo? "grid-Column: 2/7; grid-Row: 7/8; margin-top: 14rem;" : null}
`

export default function Index() {

  
  return (
        <Layout>
          <div className="application">
            <Helmet>
              <title> Vincent Collis </title>
              <meta 
                charSet = "utf-8" 
                name = "Vincent Collis Porfolio" 
                description = "A web application dedicated to the introduction of Vincent Collis"
              />
              <link rel="canonical" href="https://vincentcollis.com/" />
            </Helmet>
          </div>
          <NavBar/>
          <Section1/>
          <PageBreak1/>
          <Section2/>
          <BreakLine lineOne/>
          <Section3/>
          <BreakLine lineTwo/>
          <ContactMe/>
        </Layout>
  )
}
