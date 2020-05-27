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
      <PromptStyled data-testid="prompt">
        <strong>{randomPrompt}</strong>
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
  margin: 10px 0 20px 0;
  justify-self: center;
  align-self: center;
`
