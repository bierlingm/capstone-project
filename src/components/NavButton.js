import React from 'react'
import styled from 'styled-components/macro'
import { textColor } from '../utils/colors'

export default function NavButton({
  children,
  onClick,
  gridClass,
  'data-testid': datatestid,
}) {
  return (
    <ButtonStyled
      onClick={onClick}
      className={gridClass}
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
