import React from "react";
import { Home, About } from "../pages";
import Route from "../../../routes/route";
import { Switch } from "react-router-dom";

export function RoutesHolerite() {
  return (
    <Switch>
      <Route path="/holerite" exact component={Home} />
      <Route path="/holerite/about" exact component={About} />
    </Switch>
  );
}
