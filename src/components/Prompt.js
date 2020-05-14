import React from 'react'
import styled from 'styled-components'
import Prompts from '../Prompts.json'
import { getRandomInt } from '../utils/utils'

export default function Prompt() {
  const prompt = JSON.stringify(
    Prompts[getRandomInt(Prompts.length - 1)]['promptText']
  )

  return (
    <PromptStyled className="prompt" data-testid="prompt">
      {prompt.slice(1, prompt.length - 1)}
    </PromptStyled>
  )
}

const PromptStyled = styled.p`
  margin: 20px 0 20px 0;
  justify-self: center;
  align-self: center;
  -shadow: 20px 20px 60px #489dcf, -20px -20px 60px #62d5ff;
`
