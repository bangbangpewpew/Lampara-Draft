import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import ViewSchedule from './views/view-schedule'
import ForgotPassword from './views/forgot-password'
import Dashboard from './views/dashboard'
import ChangePassword from './views/change-password'
import Home from './views/home'
import Calendar from './views/calendar'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={ViewSchedule} exact path="/view-schedule" />
        <Route component={ForgotPassword} exact path="/forgot-password" />
        <Route component={Dashboard} exact path="/dashboard" />
        <Route component={ChangePassword} exact path="/change-password" />
        <Route component={Home} exact path="/" />
        <Route component={Calendar} exact path="/calendar" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
