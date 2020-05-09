import { useMachine } from '@xstate/react'
import React from 'react'
import styled from 'styled-components/macro'
import { writingSessionMachine } from '../WritingMachine'
import { Backdrop, BackdropTimed } from './Backdrop'

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
