import React from 'react'
import styled from 'styled-components/macro'
import { defaultFade, fullHeight } from '../utils/utils'
import { backdropColor } from '../utils/colors'

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
  height: ${fullHeight};
  text-align: center;
  background: ${backdropColor};
`

const BackdropWrapper = styled.div`
  .default {
    display: grid;
    grid-template-columns:
      [left-space-start] 10vw
      [left-space-end main-start] 40vw
      [left-half right-half] 40vw
      [main-end right-space-start] 10vw
      [right-space-end];
    grid-template-rows:
      [top-space-start] 10vh
      [top-space-end icon-start] 25vh
      [icon-end prompt-start] 30vh
      [prompt-end button-start] 25vh
      [button-end bottom-space-start] 10vh
      [bottom-end];

    .icon {
      grid-column: main-start / main-end;
      grid-row: icon-start / icon-end;
    }

    .prompt {
      grid-column: main-start / main-end;
      grid-row: prompt-start / prompt-end;
    }

    .button1 {
      grid-column: main-start / left-half;
      grid-row: button-start / button-end;
    }

    .button2 {
      grid-column: right-half / main-end;
      grid-row: button-start / button-end;
    }
  }

  .timed {
    display: grid;
    grid-template-columns: 50% 50%;
    animation: timer ${defaultFade};
  }
`
