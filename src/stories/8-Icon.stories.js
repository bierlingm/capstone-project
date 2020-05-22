import React from 'react'
import GlobalStyles from '../GlobalStyles'
import Icon from '../components/Icon'
import Backdrop from '../components/Backdrop'
import lotusWoman from '../img/lotus_woman.png'

export default {
  title: 'Icon',
  component: Icon,
}

export const Default = () => (
  <>
    <GlobalStyles />
    <Backdrop>
      <Icon
        gridClass="icon"
        src={lotusWoman}
        alt="lotus woman"
        data-testid="storyIcon"
      />
    </Backdrop>
  </>
)

Default.story = {
  name: 'Default',
}
