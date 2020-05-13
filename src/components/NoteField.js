import React from 'react'
import styled from 'styled-components'

export default function NoteField() {
  return <TextAreaStyled></TextAreaStyled>
}

const TextAreaStyled = styled.textarea`
  type: text;
  margin: 100px;
  padding: 30px;
  overflow: scroll;
  resize: none;
  background: transparent;
  color: yellow;
  align-self: center;
  font-size: 28px;
  border: transparent;
  border-radius: 10px;
  background: #55b9f3;
  box-shadow: inset 20px 20px 60px #489dcf, inset -20px -20px 60px #62d5ff;
`
