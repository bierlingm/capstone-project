import React from 'react'
import GlobalStyles from '../GlobalStyles'
import LogItems from '../components/Logs'
import prompts from '../prompts'

export default {
  title: 'LogItems',
  component: LogItems,
}

export const Default = () => (
  <React.StrictMode>
    <GlobalStyles />
    <LogItems
      sourceItems={prompts}
      onClickHome={() => console.log('Clicked the home button')}
      data-testid="logNotes"
    />
  </React.StrictMode>
)

Default.story = {
  name: 'Default',
}
