import React from 'react'
import styled from 'styled-components/macro'
import { defaultFade } from '../utils/utils'
import { bd_color } from '../utils/colors'

export function Backdrop({ children }) {
  return (
    <BackdropWrapper>
      <DivStyled className="default">{children}</DivStyled>
    </BackdropWrapper>
  )
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
  text-align: center;
  background: ${bd_color};
`

const BackdropWrapper = styled.div`
  .default {
    display: grid;
    align-content: center;
    padding: 10% 10% 10% 10%;
  }

  .timed {
    display: grid;
    grid-template-columns: 50% 50%;
    animation: timer ${defaultFade};
  }
`
