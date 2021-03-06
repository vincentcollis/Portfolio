import React from 'react'

import styled from 'styled-components'
import { createGlobalStyle } from "styled-components"
import "@fontsource/roboto" 


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

const Container = styled.div`
  max-width: 1680px;
  margin: 0 auto;
  display: grid;
  grid-column-gap: 16px;
`

export default function LayoutComp({children}) {
    return (
        <>
        <GlobalStyle theme="sizing" />
            <Container>
                {children}
            </Container>
        </>
    )
}
