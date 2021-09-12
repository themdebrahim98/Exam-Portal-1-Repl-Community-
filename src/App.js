import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Auth from './auth/Auth';
import Home from './Home/Home';
import './App.css'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth" component={Auth} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App
