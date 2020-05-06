import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Canvas from './Canvas';
import LinkButton from './LinkButton';
import WordStream from './WordStream';

export default function App() {
  return (
    
    <Router>
      <>
        <Switch>
          <Route exact path="/">
            <Canvas>
              <LinkButton>
                <Link to="/write">
                  start
                </Link>
              </LinkButton>
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