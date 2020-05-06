import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Canvas from './Canvas';
import WordStream from './WordStream';

export default function App() {
  return (
    
    <Router>
      <>
        <Switch>
          <Route exact path="/">
            <Canvas>
              <button>
                <Link to="/write">
                  write
                </Link>
              </button>
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