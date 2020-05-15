import React from 'react'
import GlobalStyles from '../GlobalStyles'
import ItemList from '../components/ItemList'
import items from '../prompts.json'

export default {
  title: 'ItemList',
  component: ItemList,
}

const itemText = 'promptText'
const itemId = 'promptId'

export const Default = () => (
  <React.StrictMode>
    <GlobalStyles />
    <ItemList items={items} itemId={itemId} itemText={itemText} />
  </React.StrictMode>
)

Default.story = {
  name: 'Default',
}
