import React from 'react'
import styled from 'styled-components/macro'
import Prompt from '../components/Prompt'
import lotusWoman from '../img/lotus_woman.png'
import { Backdrop, BackdropTimed, BackdropNotes } from './Backdrop'
import NoteField from './NoteField'

export default function PromptWriting({ current, send }) {
  return current.matches('writing') ? (
    <BackdropTimed>
      <InputStyled autoFocus type="text" alt="input" />
    </BackdropTimed>
  ) : current.matches('notes') ? (
    <BackdropNotes>
      <NoteField />
      <ButtonStyled className="button2" onClick={() => send('NEW')}>
        new
      </ButtonStyled>
    </BackdropNotes>
  ) : (
    <Backdrop>
      <Icon className="icon" src={lotusWoman} alt="Woman in lotus position" />
      <Prompt />
      <ButtonStyled className="button1" onClick={() => send('SHUFFLE')}>
        shuffle
      </ButtonStyled>
      <ButtonStyled className="button2" onClick={() => send('START')}>
        start
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
  border-radius: 10px;
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
