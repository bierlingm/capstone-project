import React from 'react'
import GlobalStyles from '../GlobalStyles'
import SessionWriting from '../components/SessionWriting'

export default {
  title: 'SessionWriting',
  component: SessionWriting,
}

export const Default = () => (
  <>
    <GlobalStyles />
    <SessionWriting />
  </>
)

Default.story = {
  name: 'Default',
}
