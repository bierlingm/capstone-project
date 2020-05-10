import { render } from '@testing-library/react'
import React from 'react'
import PromptWriting from './PromptWriting'

describe('PromptWriting', () => {
  it('Renders without error', () => {
    render(<PromptWriting />)
  })

  it('Renders prompt button upon startup', () => {
    const { getByRole } = render(<PromptWriting />)
    const button = getByRole('input')
    expect(button).toBeInTheDocument()
  })
})
