import React from 'react';
import GlobalStyles from './GlobalStyles';
import styled from 'styled-components/macro'

export default function App() {
  return (
    <BodyStyled>
      <CanvasStyled id="canvas"/>
    </BodyStyled>
  );
}

const BodyStyled = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
`

const CanvasStyled = styled.canvas`
  height: 100vh;
  width: 100vw;
`