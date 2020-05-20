import React from 'react'
import notes from '../notes'
import { getFromLocalStorage, ifXThenXElseY } from '../utils/utils'
import { BackdropNotes } from './Backdrop'
import ItemList from './ItemList'
import NavButton from './NavButton'

export default function LogNotes({ onClickHome, 'data-testid': datatestid }) {
  return (
    <div data-testid={datatestid}>
      <BackdropNotes data-testid="logNotesBackdropNotes">
        <ItemList
          gridClass="notefield"
          items={ifXThenXElseY(getFromLocalStorage('notes'), notes)}
          data-testid="logNotesItemList"
        />
        <NavButton
          gridClass="buttonLeft"
          onClick={onClickHome}
          data-testid="logNotesHomeButton"
        >
          home
        </NavButton>
      </BackdropNotes>
    </div>
  )
}
