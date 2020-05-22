import React from 'react'
import GlobalStyles from '../GlobalStyles'
import HomeView from '../components/HomeView'

export default {
  title: 'HomeView',
  component: HomeView,
}

export const Default = () => (
  <>
    <GlobalStyles />
    <HomeView
      onClickLogs={() => console.log('Clicked the notes button')}
      onClickStart={() => console.log('Clicked the start button')}
      data-testid="storyHomeView"
    />
  </>
)

Default.story = {
  name: 'Default',
}
