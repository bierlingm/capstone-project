import React from 'react'
import styled from 'styled-components/macro'

export default function WordStream() {
    return (
        <InputStyled autoFocus type="text"></InputStyled>
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