import React from 'react'
import GlobalStyles from '../GlobalStyles'
import SessionPrompt from '../components/SessionPrompt'

export default {
  title: 'SessionPrompt',
  component: SessionPrompt,
}

export const Default = () => (
  <>
    <GlobalStyles />
    <SessionPrompt
      onClickShuffle={() => console.log('Clicked the shuffle button')}
      onClickWrite={() => console.log('Clicked the write button')}
      data-testid="storyButton"
    />
  </>
)

Default.story = {
  name: 'Default',
}
