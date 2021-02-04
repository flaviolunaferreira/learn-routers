import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../../views/exemplos/About';
import Home from '../../views/exemplos/Home';
import './content.css';

const Content = (props) => {
  return (
    <main className="content">
      <Switch>
        <Route path="/about"><About /></Route>
        <Route exact path="/"><Home /></Route>
      </Switch>      
    </main>
  );
}

export default Content;

