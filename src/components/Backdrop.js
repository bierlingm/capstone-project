import { ctime } from '../utils/utils'
import React from 'react'
import styled from 'styled-components'

export function Backdrop({ children }) {
  return <DivStyled>{children}</DivStyled>
}

const DivStyled = styled.div`
  height: 100vh;
  margin: 0;
  background: teal;
  display: grid;
  grid-template-columns: 50% 50%;
`

export function BackdropTimed({ children }) {
  return <DivTimed>{children}</DivTimed>
}

const DivTimed = styled.div`
  height: 100vh;
  margin: 0;
  background: teal;
  display: grid;
  grid-template-columns: 50% 50%;
  animation: timer ${ctime};
`
