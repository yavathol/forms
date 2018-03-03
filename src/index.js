import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Controlled } from "./controlled";
import { Uncontrolled } from "./uncontrolled";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        exact
        render={() => (
          <ul>
            <li>
              Controlled:
              <ul>
                <li>
                  <Link to="controlled/text">Text</Link>
                </li>
              </ul>
            </li>
            <li>
              Uncontrolled:
              <ul>
                <li>
                  <Link to="uncontrolled/text">Text</Link>
                </li>
              </ul>
            </li>
          </ul>
        )}
      />
      <Route path="/controlled" component={Controlled} />
      <Route path="/uncontrolled" component={Uncontrolled} />
    </Switch>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
