import React from 'react'
import styled from 'styled-components'
import Backdrop from './Backdrop'

export default function ({ children }) {
  return (
    <Backdrop>
      <ButtonStyled>{children}</ButtonStyled>
    </Backdrop>
  )
}

export const ButtonStyled = styled.button`
  height: 10%;
  margin: 0;
  background: transparent;
  color: yellow;
  align-self: center;
  border: none;
  padding-left: 24px;
  font-size: 40px;
`
