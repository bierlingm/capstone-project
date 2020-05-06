import React from 'react'
import styled from 'styled-components'

export default function WordStream() {
    return (
        <InputStyled autofocus type="text"></InputStyled>
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