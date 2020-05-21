import { render } from '@testing-library/react'
import React from 'react'
import ItemList from './ItemList'
import items from '../prompts.json'

describe('ItemList', () => {
  it('Renders without error', () => {
    render(<ItemList gridClass="logsList" items={items} />)
  })
})
