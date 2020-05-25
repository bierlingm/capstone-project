import React from 'react'
import styled from 'styled-components'

export default function Icon({
  gridClass,
  src,
  alt,
  'data-testid': datatestid,
}) {
  return (
    <IconStyled
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
  animation-name: hover-up;
  animation-duration: 3.5s;
  animation-iteration-count: infinite;
`
