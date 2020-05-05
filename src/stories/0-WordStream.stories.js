import React from 'react'
import WordStream from '../WordStream'
import GlobalStyles from '../GlobalStyles'

export default {
  title: 'WordStream',
  component: WordStream
};

export const Default = () => <WordStream />

Default.story = {
  name: 'Default',
}

export const WithTimer = () =>
  <>
  <GlobalStyles />
  <WordStream />
  </>

WithTimer.story = {
  name: 'WithTimer'
}