import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/admin/Login/Login";
import Activate from "./pages/candidate/Info/Activate";
import Info from "./pages/candidate/Info/Info";
import Exam from "./pages/candidate/exam/Exam";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/activate" component={Activate} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/exam" component={Exam} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
