import React from 'react'
import Backdrop from '../components/Backdrop'
import Prompt from '../components/Prompt'
import GlobalStyles from '../GlobalStyles'

export default {
  title: 'Prompt',
  component: Prompt,
}

export const Default = () => (
  <React.StrictMode>
    <GlobalStyles />
    <Backdrop>
      <Prompt
        gridClass="prompt"
        data-testid="promptPrompt"
        randomPrompt="'Do prompts even work? Yeah, think on that, buddy...'"
      />
    </Backdrop>
  </React.StrictMode>
)

Default.story = {
  name: 'Default',
}
