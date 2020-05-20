import React from 'react'
import styled from 'styled-components/macro'

export default function NavButton({
  children,
  onClick,
  className,
  'data-testid': datatestid,
}) {
  return (
    <ButtonStyled
      onClick={onClick}
      className={className}
      data-testid={datatestid}
    >
      {children}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  width: 80%;
  padding: 20px;
  color: yellow;
  justify-self: center;
  align-self: center;
  font-size: 28px;
  border: transparent;
  border-radius: 20px;
  background: linear-gradient(145deg, #4da7db, #5bc6ff);
  box-shadow: 20px 20px 60px #489dcf, -20px -20px 60px #62d5ff;
`
