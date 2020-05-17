import React from 'react'
import styled from 'styled-components'
import prompts from '../prompts.json'
import { getRandomInt } from '../utils/utils'

export default function Prompt() {
  const randomPrompt = JSON.stringify(
    prompts[getRandomInt(prompts.length - 1)]['text']
  )

  return (
    <PromptStyled>
      {randomPrompt.slice(1, randomPrompt.length - 1)}
    </PromptStyled>
  )
}

const PromptStyled = styled.p`
  margin: 20px 0 20px 0;
  justify-self: center;
  align-self: center;
`
