import { nanoid } from 'nanoid'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { textColor } from '../styles/colors'
import {
  getFromLocalStorage,
  setToLocalStorage,
} from '../services/local-storage'
import { BackdropTimed } from '../components/Backdrop'

export default function SessionWriting({
  currentPromptId,
  'data-testid': datatestid,
}) {
  const savedPromptId = currentPromptId

  let localSessions
  try {
    localSessions = getFromLocalStorage('sessions')
  } catch {
    console.error('There are no sessions in localStorage')
  }

  const [sessionsWasAdded, setSessionsWasAdded] = useState(false)
  const [sessions, setSessions] = useState(
    localSessions !== null ? localSessions : []
  )

  useEffect(() => {
    setToLocalStorage('sessions', sessions)
  }, [sessions])

  const sessionsUpdater = {
    saveSession: newSession => {
      if (sessionsWasAdded) {
        setSessions(
          sessions.map((session, index) =>
            index === sessions.length - 1 ? newSession : session
          )
        )
      } else {
        setSessions([...sessions, newSession])
        setSessionsWasAdded(true)
      }
    },
  }

  function handleSessionSave(event) {
    const newSession = {
      id: nanoid(),
      created: Date(),
      promptId: savedPromptId,
      text: event.target.value,
    }

    sessionsUpdater.saveSession(newSession)
  }

  return (
    <BackdropTimed>
      <InputStyled
        autoFocus
        onChange={handleSessionSave}
        type="text"
        alt="input"
        data-testid={datatestid}
      />
    </BackdropTimed>
  )
}

const InputStyled = styled.input`
  height: 10%;
  margin: 0;
  background: transparent;
  color: ${textColor};
  align-self: center;
  border: none;
  padding-left: 24px;
  font-size: 40px;
`
