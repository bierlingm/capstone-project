import React from 'react'
import styled from 'styled-components'
import Prompts from '../Prompts.json'
import { getRandomInt } from '../utils/utils'

export default function Prompt() {
  const prompt = JSON.stringify(
    Prompts[getRandomInt(Prompts.length - 1)]['prompt']
  )

  return (
    <PromptStyled className="prompt" data-testid="prompt">
      {prompt.slice(1, prompt.length - 1)}
    </PromptStyled>
  )
}

const PromptStyled = styled.p`
  margin: 20px 0;
  margin-bottom: 20px;
  justify-self: center;
  align-self: center;
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
