import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { Protected } from "./Protected";

export const Routes = () => {
  return (
    <Router>
      <Protected>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Redirect from="*" to="/home" />
        </Switch>
      </Protected>
      <Route path="/login">
        <Login />
      </Route>
    </Router>
  );
};
