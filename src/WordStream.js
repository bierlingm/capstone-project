import React from 'react'
import styled from 'styled-components'

export default function WordStream() {
    return (
        <InputStyled type="text"></InputStyled>
    )
}

const InputStyled = styled.input`
  height: 10%;
  margin: 0;
  background: transparent;
  color: yellow;
  align-self: center;
  border: none;
 border-right: 2px solid;
  padding-left: 24px;
  font-size: 40px;
  animation: timer 10s;
`