import React from 'react'
import Backdrop from '../components/Backdrop'
import ItemList from '../components/ItemList'
import GlobalStyles from '../GlobalStyles'
import items from '../prompts.json'

export default {
  title: 'ItemList',
  component: ItemList,
}

const itemText = 'promptText'
const itemId = 'promptId'

export const Default = () => (
  <>
    <GlobalStyles />
    <Backdrop>
      <ItemList
        gridClass="icon"
        items={items}
        itemId={itemId}
        itemText={itemText}
      />
    </Backdrop>
  </>
)

Default.story = {
  name: 'Default',
}
