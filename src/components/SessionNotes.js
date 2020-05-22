import React from 'react'
import { BackdropNotes } from './Backdrop'
import NoteField from './NoteField'
import NavButton from './NavButton'

export default function SessionNotes({
  onClickRetry,
  onClickSave,
  'data-testid': datatestid,
}) {
  return (
    <div data-testid={datatestid}>
      <BackdropNotes data-testid="notesBackdropNotes">
        <NoteField
          gridClass="notefield"
          placeholder="Write your session notes in here..."
          data-testid="notesNoteField"
        />
        <NavButton
          gridClass="buttonLeft"
          onClick={onClickRetry}
          data-testid="notesRetryButton"
        >
          retry
        </NavButton>
        <NavButton
          gridClass="buttonRight"
          onClick={onClickSave}
          data-testid="notesSaveButton"
        >
          save
        </NavButton>
      </BackdropNotes>
    </div>
  )
}
