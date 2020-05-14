import React from 'react'
import App from '../App'
import PromptWriting from '../components/PromptWriting'
import GlobalStyles from '../GlobalStyles'

export default {
  title: 'PromptWriting',
  component: PromptWriting,
}

export const Default = () => (
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
)

Default.story = {
  name: 'Default',
}
