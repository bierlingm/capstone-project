import React from 'react'
import styled from 'styled-components/macro'
import { textColor } from '../styles/colors'

export default function NavButton({
  children,
  gridClass,
  alt,
  onClick,
  'data-testid': datatestid,
}) {
  return (
    <ButtonStyled
      className={gridClass}
      alt={alt}
      onClick={onClick}
      data-testid={datatestid}
    >
      {children}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  width: 70%;
  height: 70%;
  padding: 12px;
  color: ${textColor};
  justify-self: center;
  font-size: 24px;
  border: transparent;
  border-radius: 20px;
  background: linear-gradient(145deg, #4da7db, #5bc6ff);
  box-shadow: 8px 8px 22px #499fd1, -8px -8px 22px #61d3ff;
`
