import React from 'react'
import GlobalStyles from '../GlobalStyles'
import NoteField from '../components/NoteField'

export default {
  title: 'NoteField',
  component: NoteField,
}

export const Default = () => (
  <React.StrictMode>
    <GlobalStyles />
    <NoteField />
  </React.StrictMode>
)

Default.story = {
  name: 'Default',
}
