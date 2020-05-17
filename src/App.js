import { useMachine } from '@xstate/react'
import React from 'react'
import styled from 'styled-components/macro'
import { Machine } from 'xstate'
import { Backdrop, BackdropNotes, BackdropTimed } from './components/Backdrop'
import ItemList from './components/ItemList'
import NoteField from './components/NoteField'
import Prompt from './components/Prompt'
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
        0: 'prompt',
      },
    },
    writing: {
      on: {
        STOP: 'prompt',
      },
      after: {
        1000: 'notes',
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
    <BackdropTimed data-testid="writingBackdropTimed">
      <InputStyled autoFocus type="text" alt="input" data-testid="input" />
    </BackdropTimed>
  ) : current.matches('notes') ? (
    <BackdropNotes data-testid="notesBackdropNotes">
      <NoteField data-testid="notesNoteField" />
      <ButtonStyled
        className="buttonLeft"
        onClick={() => send('RETRY')}
        data-testid="notesRetryButton"
      >
        retry
      </ButtonStyled>
      <ButtonStyled
        className="buttonRight"
        onClick={() => send('SAVE')}
        data-testid="notesSaveButton"
      >
        save
      </ButtonStyled>
    </BackdropNotes>
  ) : current.matches('prompt') ? (
    <Backdrop data-testid="promptBackdrop">
      <Icon className="icon" src={electricLightBulb} alt="Writing prompt" />
      <DivStyled className="prompt" data-testid="promptPrompt">
        <Prompt />
      </DivStyled>
      <ButtonStyled
        className="buttonLeft"
        onClick={() => send('SHUFFLE')}
        data-testid="promptShuffleButton"
      >
        shuffle
      </ButtonStyled>
      <ButtonStyled
        className="buttonRight"
        onClick={() => send('WRITE')}
        data-testid="promptStartButton"
      >
        start
      </ButtonStyled>
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
      <ButtonStyled
        className="buttonLeft"
        onClick={() => send('HOME')}
        data-testid="noteLogHomeButton"
      >
        home
      </ButtonStyled>
    </BackdropNotes>
  ) : (
    <Backdrop data-testid="homeBackdrop">
      <Icon
        className="icon"
        src={lotusWoman}
        alt="Woman in lotus position"
        data-testid="homeIcon"
      />
      <ButtonStyled
        className="buttonLeft"
        onClick={() => send('NOTES')}
        data-testid="homeNotesButton"
      >
        notes
      </ButtonStyled>
      <ButtonStyled
        className="buttonRight"
        onClick={() => send('START')}
        data-testid="homeWriteButton"
      >
        write
      </ButtonStyled>
    </Backdrop>
  )
}

const Icon = styled.img`
  justify-self: center;
  align-self: center;
`

const ButtonStyled = styled.button`
  width: 80%;
  padding: 20px;
  color: yellow;
  justify-self: center;
  align-self: center;
  font-size: 28px;
  border: transparent;
  border-radius: 20px;
  background: linear-gradient(145deg, #4da7db, #5bc6ff);
  box-shadow: 20px 20px 60px #489dcf, -20px -20px 60px #62d5ff;
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

const DivStyled = styled.div`
  display: flex;
`
