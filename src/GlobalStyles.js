import { createGlobalStyle } from 'styled-components'
import { backdropColor, fadeColor, textColor } from './utils/colors'
import { defaultFont, defaultFontSize, defaultMargin } from './utils/utils'

export default createGlobalStyle`

* {
  margin: ${defaultMargin};
  font-family: ${defaultFont};
  font-size: ${defaultFontSize};
  color: ${textColor};
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@keyframes timer {
  0% {
    background-color: ${backdropColor};
  }
  100% {
    background-color: ${fadeColor};
  }
}
`
