import { render } from '@testing-library/react'
import React from 'react'
import HomeView from './HomeView'

describe('HomeView', () => {
  it('Renders without error', () => {
    render(<HomeView />)
  })

  it('Renders home view upon startup', () => {
    const { getByTestId } = render(<HomeView data-testid="homeView" />)
    const homeView = getByTestId('homeView')
    expect(homeView).toBeInTheDocument()
  })
})
