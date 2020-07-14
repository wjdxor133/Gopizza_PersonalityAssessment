import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../src/pages/admin/Login/Login";
import Activate from "../src/pages/Info/Activate";
import Info from "../src/pages/Info/Info";
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/activate" component={Activate} />
          <Route exact path="/info" component={Info} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
