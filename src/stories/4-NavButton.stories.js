import React from 'react'
import GlobalStyles from '../GlobalStyles'
import Backdrop from '../components/Backdrop'
import NavButton from '../components/NavButton'

export default {
  title: 'NavButton',
  component: NavButton,
}

export const Default = () => (
  <>
    <GlobalStyles />
    <Backdrop>
      <NavButton
        onClick={() => console.log('Clicked the test button')}
        gridClass="buttonLeft"
        data-testid="storyButton"
      >
        test
      </NavButton>
    </Backdrop>
  </>
)

Default.story = {
  name: 'Default',
}
