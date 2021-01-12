import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Dashboard, Home } from "./views";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:pokemonId" component={Dashboard} />

      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default Routes;
