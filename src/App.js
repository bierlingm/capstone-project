import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Canvas from './Canvas';
import WordStream from './WordStream';

export default function App() {
  return (
    
    <Router>
      <>
        <Switch>
          <Route exact path="/">
            <Canvas>
              <Link to="/write" style={{alignSelf: 'center', paddingLeft: '24px'}}>
                write now
              </Link>
            </Canvas>
          </Route>
          <Route path="/write">
            <Canvas>
              <WordStream />
            </Canvas>
          </Route>
        </Switch>
      </>
    </Router>

  );
}