import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from '../views/Home';
import { Usuarios } from '../views/Usuarios';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/users" component={ Usuarios } />
        </Switch>
      </div>
    </Router>
  )
}
