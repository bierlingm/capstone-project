import { render } from '@testing-library/react'
import React from 'react'
import SessionNotes from './SessionNotes'

describe('SessionNotes', () => {
  it('Renders without error', () => {
    render(<SessionNotes />)
  })

  it('Renders note field upon startup', () => {
    const { getByTestId } = render(<SessionNotes data-testid="sessionNotes" />)
    const sessionNotes = getByTestId('sessionNotes')
    expect(sessionNotes).toBeInTheDocument()
  })
})
