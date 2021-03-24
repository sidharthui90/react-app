import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import index from "../components/HomePageComponent/index";
import NavBar from "../components/NavBarComponent";
import TransactionsComponent from "../components/TransactionsComponent/TransactionsComponent";
 import RewardsComponent from "../components/RewardsComponent/index";
import history from "../history/history";
// Instead of BrowserRouter, we use the regular router,
// but we pass in a customer history to it.
const AppRouter = () => (
  <Router history={history}>
    <div>
      <NavBar/>
    </div>
    <div>
      <Switch>
        <Route path="/transactions" component={TransactionsComponent} />
        <Route exact path="/" component={index} />
        <Route path="/rewards" ><RewardsComponent/></Route>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
