import React from 'react'
import { BackdropPrompt } from '../components/Backdrop'
import Icon from '../components/Icon'
import NavButton from '../components/NavButton'
import Prompt from '../components/Prompt'
import electricLightBulb from '../img/electric_light_bulb.png'
import { grow } from '../styles/animations'

export default function SessionPrompt({
  randomPromptText,
  onClickShuffle,
  onClickWrite,
  'data-testid': datatestid,
}) {
  return (
    <div data-testid={datatestid}>
      <BackdropPrompt data-testid="promptBackdrop">
        <Icon
          animation={grow}
          animationLength={'.25s'}
          animationIteration={''}
          animationTiming={'ease-in-out'}
          shadow={'drop-shadow(0 0 .75rem #f4e8be)'}
          gridClass="icon"
          src={electricLightBulb}
          alt="Writing prompt"
          data-testid="promptIcon"
        />
        <Prompt
          gridClass="prompt"
          data-testid="promptPrompt"
          randomPrompt={randomPromptText}
        />
        <NavButton
          gridClass="buttonLeft"
          alt="shuffle the prompt for this session"
          onClick={onClickShuffle}
          data-testid="promptShuffleButton"
        >
          shuffle
        </NavButton>
        <NavButton
          gridClass="buttonRight"
          alt="begin writing"
          onClick={onClickWrite}
          data-testid="promptStartButton"
        >
          write
        </NavButton>
      </BackdropPrompt>
    </div>
  )
}
