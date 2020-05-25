import { createGlobalStyle } from 'styled-components'
import { writingBackdropColor, fadeColor, textColor } from './styles/colors'
import {
  defaultFont,
  defaultFontSize,
  defaultMargin,
} from './styles/default-styles'

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
    background-color: ${writingBackdropColor};
  }
  100% {
    background-color: ${fadeColor};
  }
}

@keyframes hover-up {
  from {
    margin-top: 10%;
  }
  50% {
    margin-top: 0;
  }
  to {
    margin-top: 10%;
  }
}

// @keyframes hover-down {
//   from {
//     margin-bottom: 10%;
//   }
//   to {
//     margin-bottom: 0%
//   }
// }
`
