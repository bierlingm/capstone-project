import { render } from '@testing-library/react'
import React from 'react'
import App from './App'

test('renders backdrop', () => {
  const { getByText } = render(<App />)
  const backdrop = getByText('div')
  expect(backdrop).toBeInTheDocument()
})
