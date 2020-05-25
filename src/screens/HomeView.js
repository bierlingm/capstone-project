import React from 'react'
import styled from 'styled-components'
import Backdrop from '../components/Backdrop'
import Icon from '../components/Icon'
import lotusWoman from '../img/lotus_woman.png'
import NavButton from '../components/NavButton'
import { hover } from '../styles/animations'

export default function({
  onClickLogs,
  onClickStart,
  'data-testid': datatestid,
}) {
  return (
    <div data-testid={datatestid}>
      <Backdrop data-testid="homeBackdrop">
        <Icon
          animation={hover}
          gridClass="icon"
          src={lotusWoman}
          alt="Woman in lotus position"
          data-testid="homeIcon"
        />
        <PStyled className="prompt">Welcome to FloWriter!</PStyled>
        <NavButton
          gridClass="buttonLeft"
          onClick={onClickLogs}
          data-testid="homeLogsButton"
        >
          logs
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
