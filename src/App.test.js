import { render } from '@testing-library/react'
import React from 'react'
import App from './App'

describe('App', () => {
  it('Renders without error', () => {
    render(<App />)
  })

  it('Renders ready screen', () => {
    const { getByText } = render(<App />)
    const writingSession = getByText(/write/i)
    expect(writingSession).toBeInTheDocument()
  })
})
