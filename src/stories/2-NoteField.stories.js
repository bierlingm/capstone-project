import React from 'react'
import GlobalStyles from '../GlobalStyles'
import NoteField from '../components/NoteField'
import { BackdropNotes } from '../components/Backdrop'

export default {
  title: 'NoteField',
  component: NoteField,
}

export const Default = () => (
  <React.StrictMode>
    <GlobalStyles />
    <BackdropNotes>
      <NoteField gridClass="notefield" />
    </BackdropNotes>
  </React.StrictMode>
)

Default.story = {
  name: 'Default',
}
