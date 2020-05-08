import { render, fireEvent, getByText } from '@testing-library/react'
import React from 'react'
import App from './App'

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
    const getByTestId = render(<App />)
    fireEvent.click(getByText('write'))
    const inputField = getByTestId('wordStream')
    expect(inputField).toBeVisible()
  })
})
