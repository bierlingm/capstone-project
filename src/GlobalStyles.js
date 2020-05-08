import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
  margin: 0;
  font-family: 'Roboto Mono';
  font-size: 40px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
}

a {
  color: yellow;
  text-decoration: none;
}

@keyframes timer {
  0% {
    background-color: teal;
  }
  100% {
    background-color: black;
  }
}
`
