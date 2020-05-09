import { cleanup, fireEvent, render } from '@testing-library/react'
import React from 'react'
import App from './App'

afterEach(cleanup)

describe('App', () => {
  it('Renders without error', () => {
    render(<App />)
  })

  it('Renders ready screen', () => {
    const { getByText } = render(<App />)
    const writeButton = getByText(/write/i)
    expect(writeButton).toBeInTheDocument()
  })

  it('Renders writing screen', () => {
    const { getByText } = render(<App />)
    fireEvent.click(getByText('write'))
    expect(getByText('input')).toBeInTheDocument()
  })

  it('Should take a snapshot', () => {
    const { asFragment } = render(<App />)
    expect(asFragment(<App />)).toMatchSnapshot()
  })
})
