import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Cart } from "../views/Cart";
import { Favorites } from "../views/Favorites";
import { Home } from "../views/Home";
import { NavBar } from "../views/NavBar";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/my-cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
};
