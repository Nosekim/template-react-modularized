import React from "react";
import { Home, About } from "../pages";
import Route from "../../../routes/route";
import { Switch } from "react-router-dom";

export function RoutesGR() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
    </Switch>
  );
}
