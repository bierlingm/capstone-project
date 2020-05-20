import { render } from '@testing-library/react'
import React from 'react'
import WritingSession from './WritingSession'

describe('WritingSession', () => {
  it('renders without error', () => {
    render(<WritingSession />)
  })

  it('renders note field upon startup', () => {
    const { getByTestId } = render(
      <WritingSession data-testid="writingWritingSession" />
    )
    const writingSession = getByTestId('writingWritingSession')
    expect(writingSession).toBeInTheDocument()
  })
})
