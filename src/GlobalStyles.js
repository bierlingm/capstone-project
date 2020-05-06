import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
  margin: 0;
  font-family: 'Roboto Mono';
  font-size: 40px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
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