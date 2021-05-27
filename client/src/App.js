import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TravelApp from "./pages/index";
import Nav from "./components/Nav";
import getGoat from './pages/roadGoatSearch'

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/"]}>
            <TravelApp />
          </Route>
          <Route exact path= "/getgoat" component={getGoat}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
