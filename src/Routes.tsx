import { Route, Switch } from "react-router-dom";

import Home from './pages/Home/Home';

export default function Routes() {
  return (
    // <BrowserRouter>
      <Switch>
        <Route exact path = "/">
          <Home />
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
    // </BrowserRouter>
  )
}