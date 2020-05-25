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
        <H1Styled className="title">FloWriter</H1Styled>
        <Icon
          animation={hover}
          animationLength={'5s'}
          animationIteration={'infinite'}
          animationTiming={'ease-in-out'}
          shadow={'drop-shadow(0 0 0.75rem crimson)'}
          gridClass="icon"
          src={lotusWoman}
          alt="Woman in lotus position"
          data-testid="homeIcon"
        />
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

const H1Styled = styled.h1`
  justify-self: center;
  align-self: center;
  font-size: 60px;
`
