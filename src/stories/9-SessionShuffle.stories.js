import React from 'react'
import GlobalStyles from '../GlobalStyles'
import SessionShuffle from '../components/SessionShuffle'

export default {
  title: 'SessionShuffle',
  component: SessionShuffle,
}

export const Default = () => (
  <>
    <GlobalStyles />
    <SessionShuffle data-testid="storyShuffle" />
  </>
)

Default.story = {
  name: 'Default',
}
