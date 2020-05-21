import { useMachine } from '@xstate/react'
import React from 'react'
import { Machine } from 'xstate'
import HomeView from './components/HomeView'
import Logs from './components/Logs'
import SessionNotes from './components/SessionNotes'
import SessionPrompt from './components/SessionPrompt'
import SessionShuffle from './components/SessionShuffle'
import SessionWriting from './components/SessionWriting'

export default function App() {
  const [current, send] = useMachine(appMachine)

  return current.matches('writing') ? (
    <SessionWriting data-testid="sessionWriting" />
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
  ) : current.matches('logs') ? (
    <Logs onClickHome={() => send('HOME')} data-testid="logs" />
  ) : (
    <HomeView
      data-testid="homeView"
      onClickLogs={() => send('LOGS')}
      onClickStart={() => send('START')}
    />
  )
}

const appMachine = Machine({
  id: 'promptWriting',
  initial: 'home',
  states: {
    home: {
      on: {
        LOGS: 'logs',
        START: 'prompt',
      },
    },
    logs: {
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
