import React from 'react'
import styled from 'styled-components'
import notes from '../notes.json'

export default function NoteField() {
  localStorage.getItem('notes')
    ? console.log('Notes are in localStorage')
    : localStorage.setItem('notes', JSON.stringify(notes))

  const localNotes = JSON.parse(localStorage.getItem('notes'))

  function handleSave(event) {
    return localStorage.setItem(
      'notes',
      JSON.stringify([
        ...localNotes,
        {
          noteId: localNotes.length,
          noteCreationDate: Date(),
          noteSet: 'user',
          noteText: event.target.value,
        },
      ])
    )
  }

  return (
    <TextAreaStyled
      onChange={handleSave}
      placeholder="Write your session notes in here..."
      className="notefield"
    />
  )
}

const TextAreaStyled = styled.textarea`
  type: text;
  margin: 12px;
  padding: 30px;
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

// const [notes, setNotes] = useState(Prompts)

// useEffect(() => {
//   localStorage.setItem('notes', JSON.stringify(notes))
// }, [notes])

// const localNotes = JSON.parse(localStorage.getItem('notes'))
// console.log('break point 1: ' + localNotes)

// function handleAutoSave(event) {
//   console.log('break point 2: ' + localNotes)
//   const noteText = event.target.value
//   console.log('break point 3: ' + localNotes)

//   localStorage.setItem(
//     'notes',
//     JSON.stringify(localNotes.map(...localNotes, noteText))
//   )
// }
