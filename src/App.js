import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Auth from './auth/Auth';
import Home from './Home/Home';
import  Dashboard  from './dashboard/DashBoard';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/dashboard" component={Dashboard} />

        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App
