import React from 'react'
import styled from 'styled-components/macro'
import { defaultFade } from '../utils/utils'

export function Backdrop({ children }) {
  return <DivStyled>{children}</DivStyled>
}

export function BackdropTimed({ children }) {
  return (
    <BackdropWrapper>
      <DivStyled className="timed">{children}</DivStyled>
    </BackdropWrapper>
  )
}

const DivStyled = styled.div`
  height: 100vh;
  margin: 0;
  background: teal;
  display: grid;
`

const BackdropWrapper = styled.div`
  .timed {
    grid-template-columns: 50% 50%;
    animation: timer ${defaultFade};
  }
`
