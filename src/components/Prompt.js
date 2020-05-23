import React from 'react'
import styled from 'styled-components'
import prompts from '../seed-prompts.json'
import { getRandomInt } from '../services/math'

export default function Prompt() {
  const prompt = JSON.stringify(
    prompts[getRandomInt(prompts.length - 1)]['promptText']
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
`
