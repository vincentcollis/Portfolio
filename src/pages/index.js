import React, { useState, useEffect } from 'react';
import styled from 'styled-components'



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

  const [render, setRender] = useState(false)

  useEffect(() => {
    // setRender(true)
    const timeout = setTimeout(() => setRender(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  if (!render) return null

  return (
        <Layout>
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
