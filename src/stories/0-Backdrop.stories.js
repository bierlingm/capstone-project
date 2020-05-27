import React from 'react'
import Backdrop, {
  BackdropTimed,
  BackdropPrompt,
  BackdropShuffle,
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

export const Prompt = () => (
  <>
    <GlobalStyles />
    <BackdropPrompt />
  </>
)

Prompt.story = {
  name: 'Prompt',
}

export const Shuffle = () => (
  <>
    <GlobalStyles />
    <BackdropShuffle />
  </>
)

Shuffle.story = {
  name: 'Shuffle',
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
