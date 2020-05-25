import React from 'react'
import { BackdropShuffle } from '../components/Backdrop'
import Icon from '../components/Icon'
import gameDie from '../img/game_die.png'
import { pop } from '../styles/animations'

export default function SessionShuffle({ 'data-testid': datatestid }) {
  return (
    <div data-testid={datatestid}>
      <BackdropShuffle>
        <Icon
          animation={pop}
          animationLength={'.2s'}
          animationIteration={''}
          animationTiming={'ease-in'}
          gridClass="icon"
          src={gameDie}
          alt="Die throw"
          data-testid="shuffleIcon"
        />
      </BackdropShuffle>
    </div>
  )
}
