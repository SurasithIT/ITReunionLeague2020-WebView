import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Fixture from "./pages/Fixture";
import Rules from "./pages/Rules";
import Table from "./pages/Table";
import TopScorer from "./pages/TopScorer";

function App() {
  return (
    <div className="App">
      <Router>
        Menu
        <ul>
          <Link to="/Table">
            <li>
              <i class="fas fa-list-ol" /> League Table
            </li>
          </Link>
          <Link to="/Fixture">
            <li>
              <i class="fas fa-calendar-week" /> Fixture
            </li>
          </Link>
          <Link to="/TopScorer">
            <li>
              <i class="fas fa-futbol" /> Top Scorer
            </li>
          </Link>
          <Link to="/Rules">
            <li>
              <i class="fas fa-book-open" /> Rules
            </li>
          </Link>
        </ul>
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
      </Router>
    </div>
  );
}

export default App;
