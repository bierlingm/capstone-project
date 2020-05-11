import { createGlobalStyle } from 'styled-components'
import {
  backdropColor,
  backgroundColor,
  fadeColor,
  textColor,
} from './utils/colors'
import { defaultFont, defaultFontSize, defaultMargin } from './utils/utils'

export default createGlobalStyle`

* {
  margin: ${defaultMargin};
  font-family: ${defaultFont};
  font-size: ${defaultFontSize};
  background: ${backgroundColor};
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
