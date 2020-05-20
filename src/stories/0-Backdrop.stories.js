import React from 'react'
import Backdrop, { BackdropTimed, BackdropNotes } from '../components/Backdrop'
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

export const Notes = () => (
  <React.StrictMode>
    <GlobalStyles />
    <BackdropNotes />
  </React.StrictMode>
)

Notes.story = {
  name: 'Notes',
}
