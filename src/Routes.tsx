import { Route, Switch } from "react-router";

export default function Routes() {
  return (
    <Switch>
      <Route exact path = "/">
      </Route>
      <Route path = "/about">
      </Route>
      <Route path = "/contact">
      </Route>
      <Route path = "/projects">
      </Route>
      <Route path = "/">
      </Route>
      <Route>
          {/* insert 404 page here */}
      </Route>
    </Switch>
  )
}