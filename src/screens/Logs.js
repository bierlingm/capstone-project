import React, { useState } from 'react'
import initialPrompts from '../prompts.json'
import { getFromLocalStorage } from '../services/local-storage'
import { BackdropLogs } from '../components/Backdrop'
import ItemList from '../components/ItemList'
import NavButton from '../components/NavButton'

export default function Logs({ onClickHome, 'data-testid': datatestid }) {
  let availableNotes, availableSessions, availablePrompts
  try {
    // #TODO: getData
    availableNotes = getFromLocalStorage('notes')
    availableSessions = getFromLocalStorage('sessions')
    availablePrompts = getFromLocalStorage('prompts')
  } catch {
    console.error(
      'Something went wrong with getting content from localStorage.'
    )
  }

  const initialNote = [
    {
      id: '5oRMd-NPHRLqdEGJ39yCy',
      created:
        'Thu May 14 2020 14:46:00 GMT+0200 (Central European Summer Time)',
      set: 'default',
      text: 'This is an example note. Edit me!',
    },
  ]
  const [notes] = useState(availableNotes || initialNote)
  const [sessions] = useState(availableSessions || [])
  const [prompts] = useState(availablePrompts || initialPrompts)
  const [currentLogSource, setCurrentLogSource] = useState(notes)
  // #TODO: navigation?
  return (
    <div data-testid={datatestid}>
      <BackdropLogs data-testid="logItemsBackdropLogs">
        <ItemList
          gridClass="logsList"
          items={currentLogSource}
          data-testid="logsList"
        />
        <div className="buttons">
          <NavButton
            gridClass="buttonHome"
            onClick={onClickHome}
            data-testid="logsHomeButton"
          >
            home
          </NavButton>
          <NavButton
            gridClass="buttonNotes"
            onClick={() => setCurrentLogSource(notes)}
            data-testid="logsNotesButton"
          >
            notes
          </NavButton>
          <NavButton
            gridClass="buttonSessions"
            onClick={() => setCurrentLogSource(sessions)}
            data-testid="logsSessionsButton"
          >
            sessions
          </NavButton>
          <NavButton
            gridClass="buttonPrompts"
            onClick={() => setCurrentLogSource(prompts)}
            data-testid="logsPromptsButton"
          >
            prompts
          </NavButton>
        </div>
      </BackdropLogs>
    </div>
  )
}
