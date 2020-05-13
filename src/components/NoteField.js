import React from 'react'
import styled from 'styled-components'

export default function NoteField() {
  return <TextAreaStyled className="notefield"></TextAreaStyled>
}

const TextAreaStyled = styled.textarea`
  type: text;
  margin: 0;
  padding: 30px;
  overflow: scroll;
  resize: none;
  background: transparent;
  color: yellow;
  font-size: 20px;
  border: transparent;
  border-radius: 10px;
  background: #55b9f3;
  box-shadow: inset 20px 20px 60px #489dcf, inset -20px -20px 60px #62d5ff;
`
