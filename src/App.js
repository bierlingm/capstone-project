import { useMachine } from '@xstate/react'
import React from 'react'
import { Machine } from 'xstate'
import WritingSession from './components/WritingSession'

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

export default function App() {
  const [current, send] = useMachine(writingSessionMachine)

  return <WritingSession current={current} send={send} />
}
