import { render } from '@testing-library/react'
import React from 'react'
import { Backdrop, BackdropTimed, BackdropNotes } from './Backdrop'

describe('Backdrop', () => {
  it('Renders without error', () => {
    render(<Backdrop />)
  })

  it('Renders timed backdrop without error', () => {
    render(<BackdropTimed />)
  })

  it('Renders backdrop for notes without error', () => {
    render(<BackdropNotes />)
  })
})
