import React from 'react'
import styled from 'styled-components'

export default function Canvas({ children }) {
    return (
        <CanvasStyled>
            {children}
        </CanvasStyled>
    )
}

const CanvasStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background: teal;
`