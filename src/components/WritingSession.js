import { nanoid } from 'nanoid'
import React from 'react'
import styled from 'styled-components'
import { BackdropTimed } from './Backdrop'

export default function WritingSession({
  sessions,
  setSessions,
  sessionsWasAdded,
  setSessionsWasAdded,
  'data-testid': datatestid,
}) {
  function handleSessionSave(event) {
    const newSession = {
      id: nanoid(),
      created: Date(),
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
