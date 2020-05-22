import React from 'react'
import GlobalStyles from '../GlobalStyles'
import NoteField from '../components/NoteField'
import { BackdropNotes } from '../components/Backdrop'

export default {
  title: 'NoteField',
  component: NoteField,
}

export const Default = () => (
  <>
    <GlobalStyles />
    <BackdropNotes>
      <NoteField gridClass="notefield" />
    </BackdropNotes>
  </>
)

Default.story = {
  name: 'Default',
}
