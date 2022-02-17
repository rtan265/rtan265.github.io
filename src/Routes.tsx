import { Route, Switch } from "react-router-dom";

import HomePage from './pages/Home/Home';

export default function Routes() {
  return (
      <Switch>
        <Route exact path = "/">
          <HomePage />
        </Route>
        <Route path = "/blog">
        </Route>
        <Route path = "/contact">
        </Route>
        <Route path = "/projects">
        </Route>
        <Route>
            {/* insert 404 page here */}
        </Route>
      </Switch>
  )
}