import React from 'react'
import styled from 'styled-components'
import Backdrop from './Backdrop'
import Icon from './Icon'
import lotusWoman from '../img/lotus_woman.png'
import NavButton from './NavButton'

export default function ({
  onClickNotes,
  onClickStart,
  'data-testid': datatestid,
}) {
  return (
    <div data-testid={datatestid}>
      <Backdrop data-testid="homeBackdrop">
        <Icon
          gridClass="icon"
          src={lotusWoman}
          alt="Woman in lotus position"
          data-testid="homeIcon"
        />
        <PStyled className="prompt">Welcome to FloWriter!</PStyled>
        <NavButton
          gridClass="buttonLeft"
          onClick={onClickNotes}
          data-testid="homeNotesButton"
        >
          notes
        </NavButton>
        <NavButton
          gridClass="buttonRight"
          onClick={onClickStart}
          data-testid="homeStartButton"
        >
          start
        </NavButton>
      </Backdrop>
    </div>
  )
}

const PStyled = styled.p`
  justify-self: center;
  align-self: center;
`
