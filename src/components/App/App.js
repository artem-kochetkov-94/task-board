import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.scss";
import Home from "../Home/Home";
import Board from "../Board/Board";
import { NavLink } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <NavLink to="/" className="home-link">
            Домой
          </NavLink>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/board/:id" component={Board} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
