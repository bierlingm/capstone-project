import React from 'react'
// import GlobalStyles from './GlobalStyles';
import styled from 'styled-components'
import Canvas from './Canvas'
// import WordStream from './WordStream'

export default function App() {
  return (
    <BodyStyled>
      <Canvas>
      </Canvas>
    </BodyStyled>
  );
}

const BodyStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background: teal;
  display: flex;
`