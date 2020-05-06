import React from 'react'
import styled from 'styled-components'
import { ctime } from './utils'

export default function Canvas ({children}) {
  return (
    <DivStyled>{children}</DivStyled>
  )
}

const DivStyled = styled.div`
height: 100vh;
margin: 0;
background: black;
display: grid;
grid-template-columns: 50% 50%;
animation: timer ${ctime};
`