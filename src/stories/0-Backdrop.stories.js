import React from 'react'
import { Backdrop, BackdropTimed } from '../components/Backdrop'
import GlobalStyles from '../GlobalStyles'

export default {
  title: 'Backdrop',
  component: Backdrop,
}

export const Default = () => (
  <React.StrictMode>
    <GlobalStyles />
    <Backdrop />
  </React.StrictMode>
)

Default.story = {
  name: 'Default',
}

export const Timed = () => (
  <React.StrictMode>
    <GlobalStyles />
    <BackdropTimed />
  </React.StrictMode>
)

Timed.story = {
  name: 'Timed',
}
