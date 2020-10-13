import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Fixture from "../pages/Fixture";
import Rules from "../pages/Rules";
import Table from "../pages/Table";
import TopScorer from "../pages/TopScorer";

const Content = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/Table" />
      </Route>
      <Route path="/Table" component={Table} />
      <Route path="/Fixture" component={Fixture} />
      <Route path="/TopScorer" component={TopScorer} />
      <Route path="/Rules" component={Rules} />
      <Route path="/*">
        <Redirect to="/Table" />
      </Route>
    </Switch>
  );
};

export default Content;
