import React from 'react'
import styled from 'styled-components'
import Prompts from '../Prompts.json'
import { getRandomInt } from '../utils/utils'

const prompt = JSON.stringify(
  Prompts[getRandomInt(Prompts.length - 1)]['prompt']
)

export default function Prompt() {
  return <PromptStyled>{prompt.slice(1, prompt.length - 1)}</PromptStyled>
}

const PromptStyled = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  -shadow: 20px 20px 60px #489dcf, -20px -20px 60px #62d5ff;
`

export const ButtonStyled = styled.button`
  height: 10%;
  margin: 0;
  background: transparent;
  color: yellow;
  align-self: center;
  border: none;
  padding-left: 24px;
  font-size: 40px;
`
