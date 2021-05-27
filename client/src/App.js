import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TravelApp from "./pages/index";
import Nav from "./components/Nav";
import Map from "./pages/Map";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={"/"}>
          <Route exact path={'/map'} component={Map}/>
            <TravelApp />
            <Map />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
