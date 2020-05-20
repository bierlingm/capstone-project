import React from 'react'
import GlobalStyles from '../GlobalStyles'
import WritingSession from '../components/WritingSession'

export default {
  title: 'WritingSession',
  component: WritingSession,
}

export const Default = () => (
  <React.StrictMode>
    <GlobalStyles />
    <WritingSession />
  </React.StrictMode>
)

Default.story = {
  name: 'Default',
}
