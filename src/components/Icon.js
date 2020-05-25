import React from 'react'
import styled from 'styled-components'

export default function Icon({
  animation,
  gridClass,
  src,
  alt,
  'data-testid': datatestid,
}) {
  return (
    <IconStyled
      animation={animation}
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
  animation: ${props => props.animation} 5s infinite ease-in-out;
`
