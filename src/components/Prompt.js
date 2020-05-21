import React from 'react'
import styled from 'styled-components'

export default function Prompt({
  gridClass,
  randomPrompt,
  'data-testid': datatestid,
}) {
  return (
    <div className={gridClass} data-testid={datatestid}>
      <PStyled>Your prompt:</PStyled>
      <PromptStyled>
        {randomPrompt.slice(1, randomPrompt.length - 1)}
      </PromptStyled>
    </div>
  )
}

const PStyled = styled.p`
  justify-self: center;
  align-self: center;
  font-size: 20px;
`

const PromptStyled = styled.p`
  align-self: center;
  justify-self: center;
  font-size: 32px;
`
