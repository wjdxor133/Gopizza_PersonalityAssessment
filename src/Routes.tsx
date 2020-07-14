import * as React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Exam from "./pages/candidate/exam/Exam";
import Info from "./pages/candidate/Info/Info";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Info} />
        <Route exact path="/exam" component={Exam} />
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
