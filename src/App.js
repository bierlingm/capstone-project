import { useMachine } from '@xstate/react'
import React from 'react'
import styled from 'styled-components'
import WritingCanvas from './WritingCanvas'
import WordStream from './WordStream'
import { writingSessionMachine } from './WritingSessionMachine'

export default function App() {
  const [current, send] = useMachine(writingSessionMachine)

  return current.matches('ready') ? (
    <WritingCanvas>
      <ButtonStyled onClick={() => send('START')}>write</ButtonStyled>
    </WritingCanvas>
  ) : current.matches('writing') ? (
    <WritingCanvas>
      <WordStream />
    </WritingCanvas>
  ) : (
    <WritingCanvas>
      <ButtonStyled onClick={() => send('START')}>write</ButtonStyled>
    </WritingCanvas>
  )
}

const ButtonStyled = styled.button`
  height: 10%;
  margin: 0;
  background: transparent;
  color: yellow;
  align-self: center;
  border: none;
  padding-left: 24px;
  font-size: 40px;
`
