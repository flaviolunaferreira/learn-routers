import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './app.css';
import Menu from '../components/layouts/Menu';
import Content from '../components/layouts/Content';

const App = (props) => {
  return (
    <Router>
      <div className="app">
        <Menu />
        <Content />
      </div>
    </Router>
  );
}

export default App;
