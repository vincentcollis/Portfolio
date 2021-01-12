import React from 'react'

import styled from 'styled-components'
import '@fontsource/roboto'

    // background-color: ${props => props.color}
    /* ${props.color}; */
const Block = styled.div`
    width: 80px;
    height: 80px;
    border: 1px solid #495464;

    flex-direction: column;
    flex-wrap: wrap;

    margin-bottom: 20px;
 
`

export default function ColorBlock(props) {
    const hex = props.color

    return (
        <Block style={{backgroundColor: hex}} />
    )
}
