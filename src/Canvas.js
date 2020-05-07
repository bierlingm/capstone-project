import React from 'react'
import styled from 'styled-components'
import { ctime } from './utils/utils'

export function Canvas({ children }) {
  return <DivStyled>{children}</DivStyled>
}

const DivStyled = styled.div`
  height: 100vh;
  margin: 0;
  background: teal;
  display: grid;
  grid-template-columns: 50% 50%;
`

export function CanvasWriting({ children }) {
  return <WritingCanvas>{children}</WritingCanvas>
}

const WritingCanvas = styled.div`
  height: 100vh;
  margin: 0;
  background: teal;
  display: grid;
  grid-template-columns: 50% 50%;
  animation: timer ${ctime};
`
