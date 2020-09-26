import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Favorites } from '../views/Favorites';
import { Home } from '../views/Home';
import { NavBar } from '../views/NavBar';
import { User } from '../views/User';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user" component={User} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </div>
    </Router>
  );
}
