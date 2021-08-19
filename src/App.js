import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={() => <>/ route</>} />
        <Route exact path="/search" component={() => <>/search route</>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
