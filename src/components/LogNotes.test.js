import { render } from '@testing-library/react'
import React from 'react'
import LogNotes from './LogNotes'

describe('LogNotes', () => {
  it('Renders without error', () => {
    render(<LogNotes />)
  })

  it('Renders note field upon startup', () => {
    const { getByTestId } = render(<LogNotes data-testid="logNotes" />)
    const logNotes = getByTestId('logNotes')
    expect(logNotes).toBeInTheDocument()
  })
})
