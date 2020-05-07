import { useMachine } from '@xstate/react'
import React from 'react'
import styled from 'styled-components'
import WordStream from './WordStream'
import { writingSessionMachine } from './WritingSessionMachine'
import { Canvas, CanvasWriting } from './Canvas'

export default function App() {
  const [current, send] = useMachine(writingSessionMachine)

  return current.matches('ready') ? (
    <Canvas>
      <ButtonStyled onClick={() => send('START')}>write</ButtonStyled>
    </Canvas>
  ) : current.matches('writing') ? (
    <CanvasWriting>
      <WordStream />
    </CanvasWriting>
  ) : (
    <Canvas>
      <ButtonStyled onClick={() => send('START')}>write</ButtonStyled>
    </Canvas>
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
