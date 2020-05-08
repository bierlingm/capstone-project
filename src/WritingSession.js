import { useMachine } from '@xstate/react'
import React from 'react'
import styled from 'styled-components'
import { Canvas, CanvasWriting } from './Canvas'
import WordStream from './WordStream'

const { Machine } = require('xstate')

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

export default function WritingSession() {
  const [current, send] = useMachine(writingSessionMachine)

  return current.matches('writing') ? (
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
