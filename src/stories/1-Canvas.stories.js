import React from 'react'
import Canvas from '../Canvas'
import GlobalStyles from '../GlobalStyles'

export default {
  title: 'Canvas',
  component: Canvas
};

export const Default = () => <Canvas></Canvas>

Default.story = {
  name: 'Default'
}

export const WithTimer = () =>
  <>
  <GlobalStyles />
  <Canvas></Canvas>
  </>

WithTimer.story = {
  name: 'WithTimer'
}