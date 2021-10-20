import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './Views/Home';
import Login from './Views/Login'
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
