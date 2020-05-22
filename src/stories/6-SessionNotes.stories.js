import React from 'react'
import GlobalStyles from '../GlobalStyles'
import SessionNotes from '../components/SessionNotes'

export default {
  title: 'SessionNotes',
  component: SessionNotes,
}

export const Default = () => (
  <>
    <GlobalStyles />
    <SessionNotes
      onClickRetry={() => console.log('Clicked the retry button')}
      onClickSave={() => console.log('Clicked the save button')}
      data-testid="storyButton"
    >
      click
    </SessionNotes>
  </>
)

Default.story = {
  name: 'Default',
}
