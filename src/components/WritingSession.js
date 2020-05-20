import React from 'react'
import styled from 'styled-components'
import { BackdropTimed } from './Backdrop'

export default function WritingSession({ 'data-testid': datatestid }) {
  return (
    <BackdropTimed>
      <InputStyled autoFocus type="text" alt="input" data-testid={datatestid} />
    </BackdropTimed>
  )
}

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
