import React from 'react'
import styled from 'styled-components'
import { ctime } from './utils/utils'

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

export function BackdropAnimated({ children }) {
  return <DivAnimated>{children}</DivAnimated>
}

const DivAnimated = styled.div`
  height: 100vh;
  margin: 0;
  background: teal;
  display: grid;
  grid-template-columns: 50% 50%;
  animation: timer ${ctime};
`
