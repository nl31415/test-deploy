import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Demo from "./Views/Demo";
import Home from "./Views/Home";

function BasicExample() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/demo" component={Demo} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default BasicExample;
