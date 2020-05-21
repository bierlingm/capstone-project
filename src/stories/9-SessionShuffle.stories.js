import React from 'react'
import GlobalStyles from '../GlobalStyles'
import SessionShuffle from '../components/SessionShuffle'

export default {
  title: 'SessionShuffle',
  component: SessionShuffle,
}

export const Default = () => (
  <React.StrictMode>
    <GlobalStyles />
    <SessionShuffle data-testid="storyShuffle" />
  </React.StrictMode>
)

Default.story = {
  name: 'Default',
}
