import React from 'react'
import GlobalStyles from '../GlobalStyles'
import SessionWriting from '../components/SessionWriting'

export default {
  title: 'SessionWriting',
  component: SessionWriting,
}

export const Default = () => (
  <React.StrictMode>
    <GlobalStyles />
    <SessionWriting />
  </React.StrictMode>
)

Default.story = {
  name: 'Default',
}
