import { render } from '@testing-library/react'
import React from 'react'
import WritingSession from './WritingSession'

describe('WritingSession', () => {
  it('Renders without error', () => {
    render(<WritingSession />)
  })
  it('Renders button write upon startup', () => {
    const { getByText } = render(<WritingSession />)
    const button = getByText(/write/i)
    expect(button).toBeInTheDocument()
  })
})
