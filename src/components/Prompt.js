import React from 'react'
import styled from 'styled-components'

export default function Prompt({
  gridClass,
  randomPrompt,
  'data-testid': datatestid,
}) {
  return (
    <DivStyled className={gridClass} data-testid={datatestid}>
      <PStyled>Your prompt:</PStyled>
      <PromptStyled>
        {randomPrompt.slice(1, randomPrompt.length - 1)}
      </PromptStyled>
    </DivStyled>
  )
}

const PromptStyled = styled.p`
  margin: 0px 0 20px 0;
  align-self: center;
`

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
`

const PStyled = styled.p`
  margin: 20px 0 0px 0;
  justify-self: center;
  align-self: center;
  font-size: 20px;
`
