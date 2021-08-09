import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { Protected } from "./Protected";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Protected>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Protected>
      </Switch>
    </Router>
  );
};
