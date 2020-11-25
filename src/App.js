import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './Components/Landing/index';
import Signup from './Components/Signup/index';
import Login from './Components/Login/index'
import Dashboard from './Components/Dashboard/Home'


import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/register'>
          <Signup  />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/dashboard'>
          <Dashboard  />
        </Route>
      </Switch>
    </BrowserRouter>

  )
};

export default App;
