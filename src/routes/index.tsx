import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { Protected } from "./Protected";
import { NotFound } from "../pages/NotFound";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Protected>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Protected>
      </Switch>
    </Router>
  );
};
