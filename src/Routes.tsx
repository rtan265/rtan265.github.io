import { Route, Switch, BrowserRouter } from "react-router-dom";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = "/">
        </Route>
        <Route path = "/about">
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
    </BrowserRouter>
  )
}