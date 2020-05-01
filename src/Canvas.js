import React from 'react'
import styled from 'styled-components'

export default function Canvas({ children }) {
    return (
        <CanvasStyled>
            {children}
        </CanvasStyled>
    )
}

const CanvasStyled = styled.canvas`
  height: 5%;
  width: 50%;
  margin: 0;
  background: teal;
  align-self: center;
  outline: 3px solid;
`