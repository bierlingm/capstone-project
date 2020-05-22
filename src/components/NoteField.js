import { nanoid } from 'nanoid'
import React, { useEffect, useState } from 'react'
import initialNotes from '../notes.json'
import { getFromLocalStorage, setToLocalStorage } from '../utils/utils'

export default function NoteField({
  gridClass,
  placeholder,
  'data-testid': datatestid,
}) {
  let localNotes
  try {
    localNotes = getFromLocalStorage('notes') || initialNotes
  } catch {
    console.error('There are no notes in localStorage.')
  }

  const [notesWasAdded, setNotesWasAdded] = useState(false)
  const [notes, setNotes] = useState(localNotes)

  useEffect(() => {
    setToLocalStorage('notes', notes)
  }, [notes])

  const notesUpdater = {
    saveNote: (newNote) => {
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
    },
  }

  function handleNoteSave(event) {
    const newNote = {
      id: nanoid(),
      created: Date(),
      set: 'user',
      text: event.target.value,
    }

    notesUpdater.saveNote(newNote)
  }

  return (
    <textarea
      onChange={handleNoteSave}
      placeholder={placeholder}
      className={gridClass}
      data-testid={datatestid}
    />
  )
}
