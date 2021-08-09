import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { MainLayout } from "components/utils/MainLayout";
import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/Home";
import { Protected } from "./Protected";
import { NotFound } from "components/pages/NotFound";
import { Notifications } from "components/pages/Notifications";

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
              <Route path="/notifications" component={Notifications} />
              <Route component={NotFound} />
            </Switch>
          </MainLayout>
        </Protected>
      </Switch>
    </Router>
  );
};
