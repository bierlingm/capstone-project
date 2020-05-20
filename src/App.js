import { useMachine } from '@xstate/react'
import React from 'react'
import { Machine } from 'xstate'
import HomeView from './components/HomeView'
import LogNotes from './components/LogNotes'
import SessionNotes from './components/SessionNotes'
import SessionPrompt from './components/SessionPrompt'
import SessionShuffle from './components/SessionShuffle'
import SessionWriting from './components/SessionWriting'

export default function App() {
  const [current, send] = useMachine(promptWritingMachine)

  return current.matches('writing') ? (
    <SessionWriting data-testid="writingSessionWriting" />
  ) : current.matches('notes') ? (
    <SessionNotes
      data-testid="sessionNotes"
      onClickRetry={() => send('RETRY')}
      onClickSave={() => send('SAVE')}
    />
  ) : current.matches('prompt') ? (
    <SessionPrompt
      data-testid="sessionPrompt"
      onClickShuffle={() => send('SHUFFLE')}
      onClickWrite={() => send('WRITE')}
    />
  ) : current.matches('shuffle') ? (
    <SessionShuffle data-testid="sessionShuffle" />
  ) : current.matches('noteLog') ? (
    <LogNotes onClickHome={() => send('HOME')} />
  ) : (
    <HomeView
      onClickNotes={() => send('NOTES')}
      onClickStart={() => send('START')}
    />
  )
}

const promptWritingMachine = Machine({
  id: 'promptWriting',
  initial: 'home',
  states: {
    home: {
      on: {
        NOTES: 'noteLog',
        START: 'prompt',
      },
    },
    noteLog: {
      on: {
        HOME: 'home',
      },
    },
    prompt: {
      on: {
        WRITE: 'writing',
        SHUFFLE: 'shuffle',
      },
    },
    shuffle: {
      after: {
        250: 'prompt',
      },
    },
    writing: {
      on: {
        STOP: 'prompt',
      },
      after: {
        20000: 'notes',
      },
    },
    notes: {
      on: {
        RETRY: 'writing',
        SAVE: 'home',
      },
    },
  },
})
