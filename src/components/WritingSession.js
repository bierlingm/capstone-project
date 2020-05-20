import { nanoid } from 'nanoid'
import React from 'react'
import styled from 'styled-components'
import { BackdropTimed } from './Backdrop'
import { getFromLocalStorage } from '../utils/utils'

export default function WritingSession({
  sessionsUpdater,
  'data-testid': datatestid,
}) {
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
  color: yellow;
  align-self: center;
  border: none;
  padding-left: 24px;
  font-size: 40px;
`
