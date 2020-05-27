import { useMachine } from '@xstate/react'
import React, { useState } from 'react'
import { Machine } from 'xstate'
import HomeView from './screens/HomeView'
import Logs from './screens/Logs'
import SessionNotes from './screens/SessionNotes'
import SessionPrompt from './screens/SessionPrompt'
import SessionShuffle from './screens/SessionShuffle'
import SessionWriting from './screens/SessionWriting'
import initialNote from './seed-note.json'
import initialPrompts from './seed-prompts.json'
import {
  getFromLocalStorage,
  setToLocalStorage,
} from './services/local-storage'
import { getRandomInt } from './services/math'

export default function App() {
  const [current, send] = useMachine(appMachine)

  getFromLocalStorage('notes') || setToLocalStorage('notes', initialNote)
  getFromLocalStorage('prompts') || setToLocalStorage('prompts', initialPrompts)
  getFromLocalStorage('sessions') || setToLocalStorage('sessions', [])

  let localNotes, localSessions, localPrompts
  try {
    // #TODO: getData
    localNotes = getFromLocalStorage('notes')
    localPrompts = getFromLocalStorage('prompts')
    localSessions = getFromLocalStorage('sessions')
  } catch {
    console.error(
      'Something went wrong with getting content from localStorage.'
    )
  }

  const [randomPrompt, setRandomPrompt] = useState(
    localPrompts[getRandomInt(localPrompts.length)]
  )

  return current.matches('writing') ? (
    <SessionWriting
      currentPromptId={randomPrompt.id}
      data-testid="sessionWriting"
    />
  ) : current.matches('notes') ? (
    <SessionNotes
      localNotes={localNotes}
      onClickRetry={() => send('RETRY')}
      onClickSave={() => send('SAVE')}
      data-testid="sessionNotes"
    />
  ) : current.matches('prompt') ? (
    <SessionPrompt
      randomPromptText={randomPrompt.text}
      onClickShuffle={() =>
        send('SHUFFLE') &&
        setRandomPrompt(localPrompts[getRandomInt(localPrompts.length)])
      }
      onClickWrite={() => send('WRITE')}
      data-testid="sessionPrompt"
    />
  ) : current.matches('shuffle') ? (
    <SessionShuffle data-testid="sessionShuffle" />
  ) : current.matches('logs') ? (
    <Logs
      localNotes={localNotes}
      localPrompts={localPrompts}
      localSessions={localSessions}
      onClickHome={() => send('HOME')}
      data-testid="logs"
    />
  ) : (
    <HomeView
      onClickLogs={() => send('LOGS')}
      onClickStart={() => send('START')}
      data-testid="homeView"
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
        200: 'prompt',
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
        RETRY: 'writing',
        SAVE: 'home',
      },
    },
  },
})
