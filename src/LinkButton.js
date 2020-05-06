import React from 'react'
import styled from 'styled-components/macro'

export default function LinkButton({ children }) {
  return <LinkButtonStyled>{children}</LinkButtonStyled>
}

const LinkButtonStyled = styled.button`
  height: 10%;
  margin: 0;
  background: transparent;
  color: yellow;
  align-self: center;
  border: none;
  padding-left: 24px;
  font-size: 40px;
  font-weight: bold;
  &:visited {
    color: yellow;
    text-decoration: none;
  }
`
