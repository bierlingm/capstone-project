import React from 'react'
import styled from 'styled-components'

export default function Icon({
  animation,
  animationLength,
  animationIteration,
  animationTiming,
  gridClass,
  src,
  alt,
  'data-testid': datatestid,
}) {
  return (
    <IconStyled
      animation={animation}
      animationLength={animationLength}
      animationIteration={animationIteration}
      animationTiming={animationTiming}
      className={gridClass}
      src={src}
      alt={alt}
      data-testid={datatestid}
    />
  )
}

const IconStyled = styled.img`
  justify-self: center;
  align-self: center;
  animation: ${props => props.animation} ${props => props.animationLength}
    ${props => props.animationIteration} ${props => props.animationTiming};
`
