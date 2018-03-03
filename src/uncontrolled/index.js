import React from "react";
import { Switch, Route } from "react-router-dom";
import { Text } from "./Text";

export const Uncontrolled = ({ match }) => (
  <Switch>
    <Route path={`${match.path}/text`} component={Text} />
  </Switch>
);
