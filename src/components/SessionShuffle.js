import React from 'react'
import gameDie from '../img/game_die.png'
import Backdrop from './Backdrop'
import Icon from './Icon'

export default function SessionShuffle({ 'data-testid': datatestid }) {
  return (
    <div data-testid={datatestid}>
      <Backdrop>
        <Icon
          gridClass="icon"
          src={gameDie}
          alt="Die throw"
          data-testid="shuffleIcon"
        />
      </Backdrop>
    </div>
  )
}
