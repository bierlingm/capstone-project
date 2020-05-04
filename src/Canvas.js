import React from 'react'
import styled from 'styled-components'

export default function ({children}) {
    
    return (
        <DivStyled>{children}</DivStyled>
    )
}

const DivStyled = styled.div`
height: 100vh;
width: 100vw;
background: teal;
display: grid;
grid-template-columns: 50% 50%;
animation: timer 10s;
`