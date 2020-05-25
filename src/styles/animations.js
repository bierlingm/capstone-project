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
