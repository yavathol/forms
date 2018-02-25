import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Controlled } from "./controlled";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={() => "Works!"} />
      <Route path="/controlled" component={Controlled} />
    </Switch>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
