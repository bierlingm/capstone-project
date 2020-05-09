import { useMachine } from '@xstate/react'
import React from 'react'
import styled from 'styled-components/macro'
import { Machine } from 'xstate'
import { Backdrop, BackdropTimed } from './Backdrop'

// State Machine - the 'brain'

const writingSessionMachine = Machine({
  id: 'writingSession',
  initial: 'ready',
  states: {
    ready: {
      on: {
        START: 'writing',
      },
    },
    writing: {
      on: {
        STOP: 'ready',
      },
      after: {
        90000: 'ready',
      },
    },
  },
})

// React Component - the 'body'

export default function WritingSession() {
  const [current, send] = useMachine(writingSessionMachine)

  return current.matches('writing') ? (
    <BackdropTimed>
      <InputStyled autoFocus type="text" alt="input" />
    </BackdropTimed>
  ) : (
    <Backdrop>
      <ButtonStyled onClick={() => send('START')}>write</ButtonStyled>
    </Backdrop>
  )
}

export const ButtonStyled = styled.button`
  height: 10%;
  margin: 0;
  background: transparent;
  color: yellow;
  align-self: center;
  border: none;
  padding-left: 24px;
  font-size: 40px;
`

const InputStyled = styled.input`
  height: 10%;
  margin: 0;
  background: transparent;
  color: yellow;
  align-self: center;
  border: none;
  padding-left: 24px;
  font-size: 40px;
`
