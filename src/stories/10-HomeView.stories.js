import React from 'react'
import GlobalStyles from '../GlobalStyles'
import HomeView from '../components/HomeView'

export default {
  title: 'HomeView',
  component: HomeView,
}

export const Default = () => (
  <React.StrictMode>
    <GlobalStyles />
    <HomeView
      onClickLogs={() => console.log('Clicked the notes button')}
      onClickStart={() => console.log('Clicked the start button')}
      data-testid="storyHomeView"
    />
  </React.StrictMode>
)

Default.story = {
  name: 'Default',
}
