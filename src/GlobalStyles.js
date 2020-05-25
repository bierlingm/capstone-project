import { createGlobalStyle } from 'styled-components'
import { textColor } from './styles/colors'
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
`
