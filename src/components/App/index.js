import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "./style.scss";
import WelcomePage from "../WelcomePage/";
import BoardsPage from "../../containers/BoardsPage";
import Board from "../../containers/Board";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/welcome" component={WelcomePage} />
            <Route exact path="/boards" component={BoardsPage} />
            <Route path="/boards/:id" component={Board} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
