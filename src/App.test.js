import { cleanup, render } from '@testing-library/react'
import React from 'react'
import App from './App'

afterEach(cleanup)

describe('App', () => {
  it('Renders without error', () => {
    render(<App />)
  })

  it('Renders home view', () => {
    const { getByTestId } = render(<App />)
    const homeView = getByTestId('homeView')
    expect(homeView).toBeInTheDocument()
  })

  it('Renders logs button', () => {
    const { getByTestId } = render(<App />)
    const logsButton = getByTestId('homeLogsButton')
    expect(logsButton).toBeInTheDocument()
  })

  it('Renders start button', () => {
    const { getByTestId } = render(<App />)
    const startButton = getByTestId('homeStartButton')
    expect(startButton).toBeInTheDocument()
  })

  it('Should take a snapshot', () => {
    const { asFragment } = render(<App />)
    expect(asFragment(<App />)).toMatchSnapshot()
  })
})
