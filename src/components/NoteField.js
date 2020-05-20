import { nanoid } from 'nanoid'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import initialNotes from '../notes.json'
import { getFromLocalStorage, setToLocalStorage } from '../utils/utils'
// import { createEditor } from 'slate'
// import { Slate, Editable, withReact } from 'slate-react'

export default function NoteField({
  gridClass,
  placeholder,
  'data-testid': datatestid,
}) {
  // const editor = useMemo(() => withReact(createEditor()), [])
  // const [value, setValue] = useState([
  //   {
  //     type: 'paragraph',
  //     children: [{ text: '' }],
  //   },
  // ])

  let localNotes
  try {
    localNotes = getFromLocalStorage('notes')
  } catch {
    console.error('There was nothing in localStorage')
  }

  const [notesWasAdded, setNotesWasAdded] = useState(false)
  const [notes, setNotes] = useState(
    localNotes !== null ? localNotes : initialNotes
  )

  useEffect(() => {
    setToLocalStorage('notes', notes)
  }, [notes])

  function handleSave(event) {
    const newNote = {
      id: nanoid(),
      creationDate: Date(),
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
    // <DivStyled className="notefield">
    //   <Slate
    //     editor={editor}
    //     value={value}
    //     placeholder={'Write your session notes in here...'}
    //     onChange={((value) => setValue(value)) && handleSave}
    //     data-testid="noteField"
    //   >
    //     <Editable />
    //   </Slate>
    // </DivStyled>
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
