import React, { useState } from 'react'
import initialNotes from '../notes'
import initialPrompts from '../prompts.json'
import { getFromLocalStorage } from '../utils/utils'
import { BackdropLogs } from './Backdrop'
import ItemList from './ItemList'
import NavButton from './NavButton'

export default function Logs({ onClickHome, 'data-testid': datatestid }) {
  let availableNotes
  try {
    availableNotes = getFromLocalStorage('notes')
  } catch {
    console.error('There are no notes in localStorage.')
  }

  let availableSessions
  try {
    availableSessions = getFromLocalStorage('sessions')
  } catch {
    console.error('There are no notes in localStorage.')
  }

  let availablePrompts
  try {
    availablePrompts = getFromLocalStorage('prompts')
  } catch {
    console.error('There are no notes in localStorage.')
  }

  const [notes] = useState(availableNotes || initialNotes)
  const [sessions] = useState(availableSessions || [])
  const [prompts] = useState(availablePrompts || initialPrompts)

  const [currentLogSource, setCurrentLogSource] = useState(notes)

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
