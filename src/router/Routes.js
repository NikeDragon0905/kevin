import React from "react";
import { Redirect } from "react-router-dom";
import HomeLight from "../views/all-home-version/HomeLight";
import HomeDark from "../views/all-home-version/HomeDark";
import NotFound from "../views/NotFound";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          <Route exact path='/'>
            <Redirect to='/home-dark' />
          </Route>
          <Route path='/home-light' component={HomeLight} />
          <Route path='/home-dark' component={HomeDark} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
