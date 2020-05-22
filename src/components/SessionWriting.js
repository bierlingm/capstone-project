import { nanoid } from 'nanoid'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { textColor } from '../utils/colors'
import { getFromLocalStorage, setToLocalStorage } from '../utils/services'
import { BackdropTimed } from './Backdrop'

export default function SessionWriting({ 'data-testid': datatestid }) {
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
    saveSession: (newSession) => {
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
      promptId: getFromLocalStorage('prompts')[
        getFromLocalStorage('prompts').length - 1
      ]['id'],
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
