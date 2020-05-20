import { nanoid } from 'nanoid'
import React from 'react'
import styled from 'styled-components/macro'

export default function NoteField({
  notes,
  setNotes,
  notesWasAdded,
  setNotesWasAdded,
  gridClass,
  placeholder,
  'data-testid': datatestid,
}) {
  function handleSave(event) {
    const newNote = {
      id: nanoid(),
      created: Date(),
      set: 'user',
      text: event.target.value,
    }

    if (notesWasAdded) {
      setNotes(
        notes.map((note, index) =>
          index === notes.length - 1 ? newNote : note
        )
      )
    } else {
      setNotes([...notes, newNote])
      setNotesWasAdded(true)
    }
  }

  return (
    <TextAreaStyled
      onChange={handleSave}
      placeholder={placeholder}
      className={gridClass}
      data-testid={datatestid}
    />
  )
}

const TextAreaStyled = styled.textarea`
  margin: 12px;
  padding: 28px;
  overflow: scroll;
  resize: none;
  background: transparent;
  color: yellow;
  font-size: 20px;
  border: transparent;
  border-radius: 10px;
  background: #55b9f3;
  box-shadow: inset 20px 20px 60px #489dcf, inset -20px -20px 60px #62d5ff;
`
