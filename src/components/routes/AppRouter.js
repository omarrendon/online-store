import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Home } from '../views/Home';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={ Home } />
        </Switch>
      </div>
    </Router>
  )
}
