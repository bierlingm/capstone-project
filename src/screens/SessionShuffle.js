import React from 'react'
import gameDie from '../img/game_die.png'
import { BackdropShuffle } from '../components/Backdrop'
import Icon from '../components/Icon'

export default function SessionShuffle({ 'data-testid': datatestid }) {
  return (
    <div data-testid={datatestid}>
      <BackdropShuffle>
        <Icon
          gridClass="icon"
          src={gameDie}
          alt="Die throw"
          data-testid="shuffleIcon"
        />
      </BackdropShuffle>
    </div>
  )
}
