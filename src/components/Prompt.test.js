import { render } from '@testing-library/react'
import React from 'react'
import Prompt from './Prompt'

describe('Prompt', () => {
  it('Renders prompt upon startup', () => {
    const currentPrompt = 'Hello, this is a random prompt.'
    const { getByTestId } = render(
      <Prompt randomPrompt={currentPrompt} data-testid="testPrompt" />
    )
    const prompt = getByTestId('testPrompt')
    expect(prompt).toBeInTheDocument()
  })
})
