import React from 'react';
import '../stylesheets/App.scss';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Landing from '../components/Landing'
import AboutMe from './AboutMe';


function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/">
        <Landing/>
      </Route>
      <Route exact path="/home">
        <Home/>
      </Route>
      <Route exact path="/about">
        <AboutMe/>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
