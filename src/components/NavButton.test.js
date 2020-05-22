import { render } from '@testing-library/react'
import React from 'react'
import NavButton from './NavButton'

describe('NavButton', () => {
  it('renders without error', () => {
    render(<NavButton />)
  })

  it('renders note field upon startup', () => {
    const { getByTestId } = render(<NavButton data-testid="navButton" />)
    const navButton = getByTestId('navButton')
    expect(navButton).toBeInTheDocument()
  })
})
