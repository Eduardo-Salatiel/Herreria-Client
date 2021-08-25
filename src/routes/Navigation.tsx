import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../views/Home";
const Catalog = React.lazy(() => import("../views/Catalog"));

const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Suspense fallback={<div/>}>
          <Route path="/:catalog" component={Catalog} />
        </Suspense>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default Navigation;
