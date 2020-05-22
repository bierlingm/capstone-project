import React from 'react'
import Backdrop, {
  BackdropTimed,
  BackdropNotes,
  BackdropLogs,
} from '../components/Backdrop'
import GlobalStyles from '../GlobalStyles'

export default {
  title: 'Backdrop',
  component: Backdrop,
}

export const Default = () => (
  <>
    <GlobalStyles />
    <Backdrop />
  </>
)

Default.story = {
  name: 'Default',
}

export const Timed = () => (
  <>
    <GlobalStyles />
    <BackdropTimed />
  </>
)

Timed.story = {
  name: 'Timed',
}

export const Notes = () => (
  <>
    <GlobalStyles />
    <BackdropNotes />
  </>
)

Notes.story = {
  name: 'Notes',
}

export const Logs = () => (
  <>
    <GlobalStyles />
    <BackdropLogs />
  </>
)

Notes.story = {
  name: 'Notes',
}
