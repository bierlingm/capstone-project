import { nanoid } from 'nanoid'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import initialSessions from '../sessions.json'
import { getFromLocalStorage, setToLocalStorage } from '../utils/utils'
import { BackdropTimed } from './Backdrop'

export default function WritingSession({ 'data-testid': datatestid }) {
  let localSessions
  try {
    localSessions = getFromLocalStorage('sessions')
  } catch {
    console.error('There was nothing in localStorage')
  }

  const [sessionsWasAdded, setSessionsWasAdded] = useState(false)
  const [sessions, setSessions] = useState(
    localSessions !== null ? localSessions : initialSessions
  )

  useEffect(() => {
    setToLocalStorage('sessions', sessions)
  }, [sessions])

  function handleSessionSave(event) {
    const newSession = {
      id: nanoid(),
      creationDate: Date(),
      set: 'user',
      text: event.target.value,
    }

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
  color: yellow;
  align-self: center;
  border: none;
  padding-left: 24px;
  font-size: 40px;
`
