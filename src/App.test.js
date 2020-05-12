import { cleanup, render } from '@testing-library/react'
import React from 'react'
import App from './App'

afterEach(cleanup)

describe('App', () => {
  it('renders without error', () => {
    render(<App />)
  })

  it('renders shuffle button screen', () => {
    const { getByText } = render(<App />)
    const shuffleButton = getByText(/shuffle/i)
    expect(shuffleButton).toBeInTheDocument()
  })

  it('renders start button screen', () => {
    const { getByText } = render(<App />)
    const startButton = getByText(/start/i)
    expect(startButton).toBeInTheDocument()
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<App />)
    expect(asFragment(<App />)).toMatchSnapshot()
  })
})
