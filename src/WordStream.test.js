import React from 'react'
import ReactDOM from 'react-dom'
import WordStream from './WordStream'

test('input field has focus', () => {
  ReactDOM.render(<WordStream />)
  expect(<WordStream />).toHaveFocus()
})
