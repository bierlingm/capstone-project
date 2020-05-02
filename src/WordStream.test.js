import React from 'react'
import styled from 'styled-components'
import WordStream from './WordStream'

test('shows an editable input field', () => {
    expect(
        WordStream()
    )
    .toBe(
        <InputStyled type="text"></InputStyled>
    )
})

const InputStyled = styled.input`
  height: 10%;
  margin: 0;
  background: transparent;
  color: yellow;
  align-self: center;
  border: none;
//  border-right: 2px solid;
  padding-left: 24px;
  font-size: 40px;
`