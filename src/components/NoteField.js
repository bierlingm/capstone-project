import { nanoid } from 'nanoid'
import React, { useEffect, useState } from 'react'
import {
  getFromLocalStorage,
  setToLocalStorage,
} from '../services/local-storage'

export default function NoteField({
  gridClass,
  placeholder,
  'data-testid': datatestid,
}) {
  const initialNote = {
    id: '5oRMd-NPHRLqdEGJ39yCy',
    created: 'Thu May 14 2020 14:46:00 GMT+0200 (Central European Summer Time)',
    set: 'default',
    text: 'This is an example note. Edit me!',
  }

  let localNotes
  try {
    localNotes = getFromLocalStorage('notes') || [initialNote]
  } catch {
    console.error('There are no notes in localStorage.')
  }

  const [notesWasAdded, setNotesWasAdded] = useState(false)
  const [notes, setNotes] = useState(localNotes)

  useEffect(() => {
    setToLocalStorage('notes', notes)
  }, [notes])

  const notesUpdater = {
    saveNote: newNote => {
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
