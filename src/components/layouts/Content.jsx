import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../../views/exemplos/About';
import Home from '../../views/exemplos/Home';
import NotFound from '../../views/exemplos/NotFound';
import Param from '../../views/exemplos/Param';
import './content.css';

const Content = (props) => {
  return (
    <main className="content">
      <Switch>
        <Route path="/about"><About /></Route>
        <Route path="/param/:id"><Param /></Route>
        <Route exact path="/"><Home /></Route>
        <Route exatc path="*"><NotFound /></Route>
      </Switch>      
    </main>
  );
}

export default Content;

