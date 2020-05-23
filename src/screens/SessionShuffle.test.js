import { render } from '@testing-library/react'
import React from 'react'
import SessionShuffle from './SessionShuffle'

describe('SessionShuffle', () => {
  it('Renders without error', () => {
    render(<SessionShuffle />)
  })

  it('Renders session shuffle upon startup', () => {
    const { getByTestId } = render(
      <SessionShuffle data-testid="sessionShuffle" />
    )
    const sessionShuffle = getByTestId('sessionShuffle')
    expect(sessionShuffle).toBeInTheDocument()
  })
})
