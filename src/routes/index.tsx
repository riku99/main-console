import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/Home";
import { Protected } from "./Protected";
import { NotFound } from "components/pages/NotFound";
import { MainLayout } from "components/utils/MainLayout";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Protected>
          <MainLayout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route component={NotFound} />
            </Switch>
          </MainLayout>
        </Protected>
      </Switch>
    </Router>
  );
};
