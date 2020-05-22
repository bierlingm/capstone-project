import { render } from '@testing-library/react'
import React from 'react'
import NoteField from './NoteField'

describe('NoteField', () => {
  it('renders without error', () => {
    render(<NoteField />)
  })

  it('renders note field upon startup', () => {
    const { getByTestId } = render(<NoteField />)
    const noteField = getByTestId('noteField')
    expect(noteField).toBeInTheDocument()
  })
})
