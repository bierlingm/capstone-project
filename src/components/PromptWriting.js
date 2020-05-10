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
      <ButtonStyled onClick={() => send('START')}>{prompt}</ButtonStyled>
    </Backdrop>
  )
}

const ButtonStyled = styled.button`
  margin: 24px;
  padding: 8px;
  border: 2px yellow solid;
  background: transparent;
  color: yellow;
  align-self: center;
  font-size: 36px;
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
