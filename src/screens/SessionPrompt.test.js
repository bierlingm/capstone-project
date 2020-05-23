import { render } from '@testing-library/react'
import React from 'react'
import SessionPrompt from './SessionPrompt'

describe('SessionPrompt', () => {
  it('Renders without error', () => {
    render(<SessionPrompt />)
  })

  it('Renders session prompt upon startup', () => {
    const randomPrompt = 'Hello, this is a random prompt.'
    const onClickShuffle = () => console.log('Shuffle button works')
    const onClickWrite = () => console.log('Write button works')
    const { getByTestId } = render(
      <SessionPrompt
        data-testid="sessionPrompt"
        randomPrompt={randomPrompt}
        onClickShuffle={onClickShuffle}
        onClickWrite={onClickWrite}
      />
    )
    const sessionPrompt = getByTestId('sessionPrompt')
    expect(sessionPrompt).toBeInTheDocument()
  })
})
