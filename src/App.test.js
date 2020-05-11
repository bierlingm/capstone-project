import { cleanup, render } from '@testing-library/react'
import React from 'react'
import App from './App'

afterEach(cleanup)

describe('App', () => {
  it('renders without error', () => {
    render(<App />)
  })

  it('renders ready screen', () => {
    const { getByText } = render(<App />)
    const writeButton = getByText(/write/i)
    expect(writeButton).toBeInTheDocument()
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<App />)
    expect(asFragment(<App />)).toMatchSnapshot()
  })
})
