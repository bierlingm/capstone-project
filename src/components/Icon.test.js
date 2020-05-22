import { render } from '@testing-library/react'
import React from 'react'
import Icon from './Icon'

describe('Icon', () => {
  it('Renders without error', () => {
    render(<Icon />)
  })

  it('Renders home view upon startup', () => {
    const { getByTestId } = render(<Icon data-testid="icon" />)
    const icon = getByTestId('icon')
    expect(icon).toBeInTheDocument()
  })
})
