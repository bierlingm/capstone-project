import { render } from '@testing-library/react'
import React from 'react'
import SessionWriting from './SessionWriting'

describe('SessionWriting', () => {
  it('Renders without error', () => {
    render(<SessionWriting />)
  })

  it('Renders note field upon startup', () => {
    const { getByTestId } = render(
      <SessionWriting data-testid="sessionWriting" />
    )
    const sessionWriting = getByTestId('sessionWriting')
    expect(sessionWriting).toBeInTheDocument()
  })
})
