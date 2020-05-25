import { keyframes } from 'styled-components'
import { writingBackdropColor, fadeColor } from '../styles/colors'

export const timer = keyframes`
  0% {
  background-color: ${writingBackdropColor};
  }
  100% {
  background-color: ${fadeColor};
  }
`

export const hover = keyframes`
  from, to {
  margin-top: 5%;
  width: 200px;
  }
  50% {
  margin-top: 0;
`

export const grow = keyframes`
  from {
    height: 50%;
  }
  to {
    height: 100%;
  }
`

export const pop = keyframes`
  from, to {
    margin-right: -200px;
  }
  50% {
    margin-right: 200px;
  }
`
