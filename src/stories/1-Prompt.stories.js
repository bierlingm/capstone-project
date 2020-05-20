import React from 'react'
import Prompt from '../components/Prompt'
import GlobalStyles from '../GlobalStyles'
import { Backdrop } from '../components/Backdrop'

export default {
  title: 'Prompt',
  component: Prompt,
}

export const Default = () => (
  <React.StrictMode>
    <GlobalStyles />
    <Backdrop>
      <Prompt />
    </Backdrop>
  </React.StrictMode>
)

Default.story = {
  name: 'Default',
}
