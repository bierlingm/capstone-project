import { cleanup, render } from '@testing-library/react'
import React from 'react'
import App from './App'

afterEach(cleanup)

describe('App', () => {
  it('renders without error', () => {
    render(<App />)
  })

  it('renders notes button', () => {
    const { getByTestId } = render(<App />)
    const notesButton = getByTestId('homeNotesButton')
    expect(notesButton).toBeInTheDocument()
  })

  it('renders write button', () => {
    const { getByTestId } = render(<App />)
    const writeButton = getByTestId('homeWriteButton')
    expect(writeButton).toBeInTheDocument()
  })

  it('should take a snapshot', () => {
    const { asFragment } = render(<App />)
    expect(asFragment(<App />)).toMatchSnapshot()
  })
})
