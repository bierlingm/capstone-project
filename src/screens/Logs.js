import React, { useState } from 'react'
import styled from 'styled-components'
import { BackdropLogs } from '../components/Backdrop'
import ItemList from '../components/ItemList'
import NavButton from '../components/NavButton'

export default function Logs({
  onClickHome,
  localNotes,
  localPrompts,
  localSessions,
  'data-testid': datatestid,
}) {
  const [notes] = useState(localNotes)
  const [prompts] = useState(localPrompts)
  const [sessions] = useState(localSessions)
  const [currentLogSource, setCurrentLogSource] = useState(notes)
  // #TODO: navigation?
  return (
    <div data-testid={datatestid}>
      <BackdropLogs data-testid="logItemsBackdropLogs">
        <H2Styled className="title">Logs</H2Styled>
        <ItemList
          gridClass="logsList"
          items={currentLogSource}
          data-testid="logsList"
        />
        <div className="buttons">
          <NavButton
            gridClass="buttonHome"
            alt="return to home screen"
            onClick={onClickHome}
            data-testid="logsHomeButton"
          >
            home
          </NavButton>
          <NavButton
            gridClass="buttonNotes"
            alt="view list of notes"
            onClick={() => setCurrentLogSource(notes)}
            data-testid="logsNotesButton"
          >
            notes
          </NavButton>
          <NavButton
            gridClass="buttonSessions"
            alt="view list of sessions"
            onClick={() => setCurrentLogSource(sessions)}
            data-testid="logsSessionsButton"
          >
            sessions
          </NavButton>
          <NavButton
            gridClass="buttonPrompts"
            alt="view list of prompts"
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

const H2Styled = styled.h2`
  justify-self: center;
  align-self: center;
  font-size: 50px;
`
