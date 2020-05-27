import React from 'react'
import styled from 'styled-components'
import { BackdropNotes } from '../components/Backdrop'
import NavButton from '../components/NavButton'
import NoteField from '../components/NoteField'

export default function SessionNotes({
  localNotes,
  onClickRetry,
  onClickSave,
  'data-testid': datatestid,
}) {
  return (
    <div data-testid={datatestid}>
      <BackdropNotes data-testid="notesBackdropNotes">
        <H2Styled className="title">Session Note</H2Styled>
        <NoteField
          localNotes={localNotes}
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

const H2Styled = styled.h2`
  justify-self: center;
  align-self: center;
  font-size: 50px;
`
