import React from 'react'
import styled from 'styled-components/macro'
import Prompt from '../components/Prompt'
import lotus_woman from '../img/lotus_woman.png'
import { Backdrop, BackdropTimed } from './Backdrop'

export default function PromptWriting({ current, send }) {
  return current.matches('writing') ? (
    <BackdropTimed>
      <InputStyled autoFocus type="text" alt="input" />
    </BackdropTimed>
  ) : (
    <Backdrop>
      <img
        style={{ justifySelf: 'center' }}
        src={lotus_woman}
        alt="Woman in lotus position"
      />
      <Prompt />
      <ButtonStyled onClick={() => send('START')}>start</ButtonStyled>
    </Backdrop>
  )
}

const ButtonStyled = styled.button`
  margin: 24px;
  padding: 24px;
  color: yellow;
  justify-self: center;
  align-self: center;
  font-size: 36px;
  border: transparent;
  border-radius: 10px;
  background: transparent;
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
