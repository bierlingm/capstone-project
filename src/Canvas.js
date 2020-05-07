import React from 'react'
import styled from 'styled-components'

export default function Canvas({ children }) {
  return <DivStyled>{children}</DivStyled>
}

const DivStyled = styled.div`
  height: 100vh;
  margin: 0;
  background: teal;
  display: grid;
  grid-template-columns: 50% 50%;
`
