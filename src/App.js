import { useMachine } from '@xstate/react'
import React from 'react'
import { Machine } from 'xstate'
import PromptWriting from './components/PromptWriting'

export const promptWritingMachine = Machine({
  id: 'promptWriting',
  initial: 'prompt',
  states: {
    prompt: {
      on: {
        START: 'writing',
        SHUFFLE: 'shuffle',
      },
    },
    shuffle: {
      after: {
        0: 'prompt',
      },
    },
    writing: {
      on: {
        STOP: 'prompt',
      },
      after: {
        90000: 'notes',
      },
    },
    notes: {
      on: {
        REDO: 'writing',
        NEW: 'prompt',
      },
    },
  },
})

export default function App() {
  const [current, send] = useMachine(promptWritingMachine)

  return <PromptWriting current={current} send={send} />
}
