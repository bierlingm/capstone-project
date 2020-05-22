import React from 'react'
import Prompt from '../components/Prompt'
import GlobalStyles from '../GlobalStyles'

export default {
  title: 'Prompt',
  component: Prompt,
}

export const Default = () => (
  <React.StrictMode>
    <GlobalStyles />
    <Prompt />
  </React.StrictMode>
)

Default.story = {
  name: 'Default',
}
