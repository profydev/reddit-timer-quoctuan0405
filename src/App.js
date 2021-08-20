import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <>/ route</>} />
        <Route exact path="/search" component={() => <>/search route</>} />
        <Route>404 - Not found</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
