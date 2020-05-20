import React from 'react'
import styled from 'styled-components'

export default function Prompt({
  gridClass,
  'data-testid': datatestid,
  randomPrompt,
}) {
  return (
    <DivStyled className={gridClass} data-testid={datatestid}>
      <PromptStyled>
        <SpanStyled>Your prompt:</SpanStyled>
        <br />
        {randomPrompt.slice(1, randomPrompt.length - 1)}
      </PromptStyled>
    </DivStyled>
  )
}

const PromptStyled = styled.p`
  margin: 20px 0 20px 0;
  justify-self: center;
  align-self: center;
`

const DivStyled = styled.div`
  display: flex;
`

const SpanStyled = styled.span`
  margin: 20px 0 20px 0;
  justify-self: center;
  align-self: center;
  font-size: 20px;
`
