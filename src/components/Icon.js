import React from 'react'
import styled from 'styled-components'
import { hover } from '../styles/animations'

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
  animation: ${hover} 3.5s infinite;
`
