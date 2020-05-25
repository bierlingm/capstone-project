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
  from {
  margin-top: 10%;
  }
  50% {
  margin-top: 0;
  }
  to {
  margin-top: 10%;
  }
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
