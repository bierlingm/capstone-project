import React from 'react'
import styled from 'styled-components/macro'
import Prompts from '../Prompts.json'
import { getRandomInt } from '../utils/utils'
import { Backdrop, BackdropTimed } from './Backdrop'

const prompt = JSON.stringify(
  Prompts[getRandomInt(Prompts.length - 1)]['prompt']
)

export default function PromptWriting({ current, send }) {
  return current.matches('writing') ? (
    <BackdropTimed>
      <InputStyled autoFocus type="text" alt="input" />
    </BackdropTimed>
  ) : (
    <Backdrop>
      <p>
        Meditate on this
        <br />
        <span role="img" aria-label="Finger pointing down to prompt">
          👇
        </span>
      </p>
      <PromptStyled>{prompt.slice(1, prompt.length - 1)}</PromptStyled>
      <ButtonStyled onClick={() => send('START')}>start</ButtonStyled>
    </Backdrop>
  )
}

const PromptStyled = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
`

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
