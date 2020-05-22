import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import initialNotes from '../notes.json'
import { getFromLocalStorage, setToLocalStorage } from '../utils/services'
import { nanoid } from 'nanoid'

export default function NoteField() {
  let localNotes
  try {
    localNotes = JSON.parse(localStorage.getItem('notes'))
  } catch {
    console.error('Something bad happened...')
  }

  const [notesWasAdded, setNotesWasAdded] = useState(false)
  const [notes, setNotes] = useState(
    localNotes !== null ? localNotes : initialNotes
  )

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  function handleSave(event) {
    const newNote = {
      noteId: nanoid(),
      noteCreationDate: Date(),
      noteSet: 'user',
      noteText: event.target.value,
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
      placeholder="Write your session notes in here..."
      className="notefield"
      data-testid="noteField"
    />
  )
}

const TextAreaStyled = styled.textarea`
  type: text;
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
