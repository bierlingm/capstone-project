import React from 'react'
import GlobalStyles from '../GlobalStyles'
import { Backdrop } from '../components/Backdrop'
import NavButton from '../components/NavButton'

export default {
  title: 'NavButton',
  component: NavButton,
}

export const Default = () => (
  <React.StrictMode>
    <GlobalStyles />
    <Backdrop>
      <NavButton
        onClick={() => console.log('clicked the button')}
        className="buttonLeft"
        data-testid="storyButton"
      >
        click
      </NavButton>
    </Backdrop>
  </React.StrictMode>
)

Default.story = {
  name: 'Default',
}
