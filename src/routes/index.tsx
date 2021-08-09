import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Login } from "../pages/Login";

export const Routes = () => {
  return (
    <Router>
      <Route path="/login">
        <Login />
      </Route>
    </Router>
  );
};
