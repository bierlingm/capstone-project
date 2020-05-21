import React from 'react'
import styled from 'styled-components/macro'
import { backdropColor } from '../utils/colors'
import { currentFade, fullHeight } from '../utils/utils'

export default function Backdrop({ children }) {
  return (
    <BackdropWrapper>
      <Container className="default">{children}</Container>
    </BackdropWrapper>
  )
}

export function BackdropTimed({ children }) {
  return (
    <BackdropWrapper>
      <Container className="timed">{children}</Container>
    </BackdropWrapper>
  )
}

export function BackdropNotes({ children }) {
  return (
    <BackdropWrapper>
      <Container className="notes">{children}</Container>
    </BackdropWrapper>
  )
}

export function BackdropLogs({ children }) {
  return (
    <BackdropWrapper>
      <Container className="logs">{children}</Container>
    </BackdropWrapper>
  )
}

const Container = styled.div`
  height: ${fullHeight};
  margin: 0px;
  text-align: center;
  background: ${backdropColor};
`

const BackdropWrapper = styled.div`
  .default {
    display: grid;
    grid-template-columns:
      [left-space-start] 8vw
      [left-space-end main-start] 42vw
      [left-half right-half] 42vw
      [main-end right-space-start] 8vw
      [right-space-end];
    grid-template-rows:
      [top-space-start] 8vh
      [top-space-end icon-start] 23vh
      [icon-end prompt-start] 48vh
      [prompt-end button-start] 13vh
      [button-end bottom-space-start] 8vh
      [bottom-end];

    .icon {
      grid-column: main-start / main-end;
      grid-row: icon-start / icon-end;
      justify-self: center;
    }

    .prompt {
      grid-column: main-start / main-end;
      grid-row: prompt-start / prompt-end;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      overflow: scroll;
    }

    .buttonLeft {
      grid-column: main-start / left-half;
      grid-row: button-start / button-end;
    }

    .buttonRight {
      grid-column: right-half / main-end;
      grid-row: button-start / button-end;
    }
  }

  .timed {
    display: grid;
    grid-template-columns: 50% 50%;
    animation: timer ${currentFade};
  }

  .notes {
    display: grid;
    grid-template-columns:
      [left-space-start] 8vw
      [left-space-end main-start] 42vw
      [left-half right-half] 42vw
      [main-end right-space-start] 8vw
      [right-space-end];
    grid-template-rows:
      [top-space-start] 8vh
      [top-space-end notes-start] 63vh
      [notes-end button-start] 21vh
      [button-end bottom-space-start] 8vh
      [bottom-end];

    .notefield {
      grid-column: main-start / main-end;
      grid-row: notes-start / notes-end;
      text-align: start;
      margin: 20px;
      padding: 28px;
      overflow: scroll;
      resize: none;
      background: transparent;
      color: yellow;
      font-size: 20px;
      border: transparent;
      border-radius: 10px;
      background: #55b9f3;
      box-shadow: inset 20px 20px 60px #489dcf, inset -20px -20px 60px #62d5ff;
    }

    .buttonLeft {
      grid-column: main-start / left-half;
      grid-row: button-start / button-end;
    }

    .buttonRight {
      grid-column: right-half / main-end;
      grid-row: button-start / button-end;
    }
  }

  .logs {
    display: grid;
    grid-template-columns:
      [left-space-start] 1fr
      [left-space-end left-half-start] 8fr
      [left-half-end right-half-start] 8fr
      [right-half-end right-space-start] 1fr
      [right-space-end];
    grid-template-rows:
      [top-space-start] 1fr
      [top-space-end notes-start] 10fr
      [notes-end buttons-start] 4fr
      [buttons-end bottom-space-start] 0.5fr
      [bottom-space-end];

    .logsList {
      grid-column: left-half-start / right-half-end;
      grid-row: notes-start / notes-end;
      display: flex;
      text-align: start;
      margin-bottom: 10px;
      padding: 24px;
      overflow: scroll;
      resize: none;
      background: transparent;
      color: yellow;
      font-size: 20px;
      border: transparent;
      border-radius: 10px;
      border-radius: 20px;
      background: #55b9f3;
      box-shadow: inset 8px 8px 22px #499fd1, inset -8px -8px 22px #61d3ff;
    }

    .buttons {
      grid-column: left-space-start / right-space-end;
      grid-row: buttons-start / buttons-end;
      display: grid;
      grid-template-columns:
        [left-button-start] 1fr
        [left-button-end right-button-start] 1fr
        [right-button-end];
      grid-template-rows:
        [top-row-start] 1fr
        [top-row-end bottom-row-start] 1fr
        [bottom-row-end];
      padding-top: 20px;
      justify-items: space-around;
      align-items: space-around;

      .buttonHome {
        grid-column: left-button-start / left-button-end;
        grid-row: bottom-row-start / bottom-row-end;
      }

      .buttonNotes {
        grid-column: right-button-start / right-button-end;
        grid-row: bottom-row-start / bottom-row-end;
      }

      .buttonSessions {
        grid-column: left-button-start / left-button-end;
        grid-row: top-row-start / top-row-end;
      }

      .buttonPrompts {
        grid-column: right-button-start / right-button-end;
        grid-row: top-row-start / top-row-end;
      }
    }
  }
`
