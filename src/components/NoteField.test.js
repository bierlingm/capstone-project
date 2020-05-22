import { render } from '@testing-library/react'
import React from 'react'
import NoteField from './NoteField'

describe('NoteField', () => {
  it('Renders without error', () => {
    render(<NoteField />)
  })

  it('Renders note field upon startup', () => {
    const { getByTestId } = render(<NoteField data-testid="noteField" />)
    const noteField = getByTestId('noteField')
    expect(noteField).toBeInTheDocument()
  })
})
