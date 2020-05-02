import React from 'react';
// import GlobalStyles from './GlobalStyles'
import Canvas from './Canvas';
import WordStream from './WordStream';

export default function App() {
  return (
    // <GlobalStyles>
        <Canvas>
          <WordStream />
        </Canvas>
    // </GlobalStyles>
  );
}