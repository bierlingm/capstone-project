import React from 'react'
import { Backdrop, BackdropTimed } from '../components/Backdrop'

export default {
  title: 'Backdrop',
  component: Backdrop,
}

export const Default = () => <Backdrop />

Default.story = {
  name: 'Default',
}

export const Timed = () => <BackdropTimed />

Timed.story = {
  name: 'Timed',
}
