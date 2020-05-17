import { render } from '@testing-library/react'
import React from 'react'
import Prompt from './Prompt'

describe('Prompt', () => {
  it('renders without error', () => {
    render(<Prompt />)
  })

  it('renders prompt upon startup', () => {
    const { getByTestId } = render(<Prompt />)
    const prompt = getByTestId('promptPrompt')
    expect(prompt).toBeInTheDocument()
  })
})
