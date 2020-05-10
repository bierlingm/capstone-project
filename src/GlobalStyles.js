import { createGlobalStyle } from 'styled-components'
import { bd_color, fade_color } from './utils/colors'

export default createGlobalStyle`

* {
  margin: 0;
  font-family: 'Zilla Slab';
  font-size: 36px;
  color: yellow;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
}

@keyframes timer {
  0% {
    background-color: ${bd_color};
  }
  100% {
    background-color: ${fade_color};
  }
}
`
