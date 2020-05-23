import React from 'react'
import Prompt from '../components/Prompt'
import electricLightBulb from '../img/electric_light_bulb.png'
import prompts from '../prompts.json'
import { getRandomInt } from '../services/math'
import { setToLocalStorage } from '../services/local-storage'
import Backdrop from '../components/Backdrop'
import Icon from '../components/Icon'
import NavButton from '../components/NavButton'

export default function SessionPrompt({
  onClickShuffle,
  onClickWrite,
  'data-testid': datatestid,
}) {
  setToLocalStorage('prompts', prompts)
  const randomPrompt = JSON.stringify(
    prompts[getRandomInt(prompts.length - 1)]['text']
  )

  return (
    <div data-testid={datatestid}>
      <Backdrop data-testid="promptBackdrop">
        <Icon
          gridClass="icon"
          src={electricLightBulb}
          alt="Writing prompt"
          data-testid="promptIcon"
        />
        <Prompt
          gridClass="prompt"
          data-testid="promptPrompt"
          randomPrompt={randomPrompt}
        />
        <NavButton
          gridClass="buttonLeft"
          onClick={onClickShuffle}
          data-testid="promptShuffleButton"
        >
          shuffle
        </NavButton>
        <NavButton
          gridClass="buttonRight"
          onClick={onClickWrite}
          data-testid="promptStartButton"
        >
          write
        </NavButton>
      </Backdrop>
    </div>
  )
}
