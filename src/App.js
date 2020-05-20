import { useMachine } from '@xstate/react'
import React from 'react'
import styled from 'styled-components/macro'
import { Machine } from 'xstate'
import { Backdrop, BackdropNotes, BackdropTimed } from './components/Backdrop'
import ItemList from './components/ItemList'
import NavButton from './components/NavButton'
import NoteField from './components/NoteField'
import Prompt from './components/Prompt'
import WritingSession from './components/WritingSession'
import electricLightBulb from './img/electric_light_bulb.png'
import gameDie from './img/game_die.png'
import lotusWoman from './img/lotus_woman.png'
import notes from './notes.json'
import { getFromLocalStorage, ifXthenXElseY } from './utils/utils'

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

export default function App() {
  const [current, send] = useMachine(promptWritingMachine)

  return current.matches('writing') ? (
    <WritingSession data-testid="writingWritingSession" />
  ) : current.matches('notes') ? (
    <BackdropNotes data-testid="notesBackdropNotes">
      <NoteField
        placeholder="Write your session notes in here..."
        gridClass="notefield"
        data-testid="notesNoteField"
      />
      <NavButton
        className="buttonLeft"
        onClick={() => send('RETRY')}
        data-testid="notesRetryButton"
      >
        retry
      </NavButton>
      <NavButton
        className="buttonRight"
        onClick={() => send('SAVE')}
        data-testid="notesSaveButton"
      >
        save
      </NavButton>
    </BackdropNotes>
  ) : current.matches('prompt') ? (
    <Backdrop data-testid="promptBackdrop">
      <Icon className="icon" src={electricLightBulb} alt="Writing prompt" />
      <Prompt />
      <NavButton
        className="buttonLeft"
        onClick={() => send('SHUFFLE')}
        data-testid="promptShuffleButton"
      >
        shuffle
      </NavButton>
      <NavButton
        className="buttonRight"
        onClick={() => send('WRITE')}
        data-testid="promptStartButton"
      >
        start
      </NavButton>
    </Backdrop>
  ) : current.matches('shuffle') ? (
    <Backdrop>
      <Icon
        className="main"
        src={gameDie}
        alt="Die throw"
        data-testid="shuffleGameDie"
      />
    </Backdrop>
  ) : current.matches('noteLog') ? (
    <BackdropNotes data-testid="noteLogBackdropNotes">
      <ItemList
        gridClass="notefield"
        items={ifXthenXElseY(getFromLocalStorage('notes'), notes)}
        data-testid="noteLogItemList"
      />
      <NavButton
        className="buttonLeft"
        onClick={() => send('HOME')}
        data-testid="noteLogHomeButton"
      >
        home
      </NavButton>
    </BackdropNotes>
  ) : (
    <Backdrop data-testid="homeBackdrop">
      <Icon
        className="icon"
        src={lotusWoman}
        alt="Woman in lotus position"
        data-testid="homeIcon"
      />
      <PStyled className="prompt">Welcome to FloWriter!</PStyled>
      <NavButton
        className="buttonLeft"
        onClick={() => send('NOTES')}
        data-testid="homeNotesButton"
      >
        notes
      </NavButton>
      <NavButton
        className="buttonRight"
        onClick={() => send('START')}
        data-testid="homeWriteButton"
      >
        write
      </NavButton>
    </Backdrop>
  )
}

const Icon = styled.img`
  justify-self: center;
  align-self: center;
`

const PStyled = styled.p`
  justify-self: center;
  align-self: center;
`
