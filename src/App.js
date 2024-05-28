import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CardInputInfo from './CardInputInfo';
import CardOutput from './CardOutput';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={CardInputInfo} />
        <Route path="/cardoutput" component={CardOutput} />
      </div>
    </Router>
  );
}

export default CardInputInfo;

