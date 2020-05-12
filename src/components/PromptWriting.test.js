import { render } from '@testing-library/react'
import React from 'react'
import PromptWriting from './PromptWriting'
import { useMachine } from '@xstate/react'
import { promptWritingMachine } from '../App'

describe('PromptWriting', () => {
  // still failing

  it('renders without error', () => {
    const current = 'prompt'
    render(<PromptWriting current={current} />)
  })

  it('renders shuffle button upon startup', () => {
    const [current, send] = useMachine(promptWritingMachine)
    const { getByText } = render(<PromptWriting current={current} />)
    const button = getByText('shuffle')
    expect(button).toBeInTheDocument()
  })
})
