import { render } from '@testing-library/react'
import React from 'react'
import Backdrop, {
  BackdropLogs,
  BackdropNotes,
  BackdropShuffle,
  BackdropTimed,
} from './Backdrop'

describe('Backdrop', () => {
  it('Renders without error', () => {
    render(<Backdrop />)
  })

  it('Renders timed backdrop without error', () => {
    render(<BackdropTimed />)
  })

  it('Renders shuffle backdrop without error', () => {
    render(<BackdropShuffle />)
  })

  it('Renders backdrop for notes without error', () => {
    render(<BackdropNotes />)
  })

  it('Renders backdrop for logs without error', () => {
    render(<BackdropLogs />)
  })
})
