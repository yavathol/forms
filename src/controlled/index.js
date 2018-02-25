import React from "react";
import { Switch, Route } from "react-router-dom";
import { Basic } from "./Basic";

export const Controlled = () => (
  <Switch>
    <Route route="/basic" component={Basic} />
  </Switch>
);
