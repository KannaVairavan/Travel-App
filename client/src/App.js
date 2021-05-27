import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchAppBar from "./components/Nav";
import GetGoat from './pages/roadGoatSearch'
import Home from "./pages/index";
import Dashboard from "./pages/dashboard";
import LoginPage from "./pages/loginpage";
import SignUpPage from "./pages/signup";
import { makeStyles } from "@material-ui/core/styles";
import Map from "./pages/Map";

const useStyles = makeStyles({});

export default function App() {
  const classes = useStyles();
  return (
      <div className ={classes.container}>
        <Router>
          <SearchAppBar />
          <Switch>
            <Route exact path="/" render={props => <Home {...props} />} />          
            <Route exact path="/dashboard" render={props => <Dashboard {...props} />} />
            <Route exact path="/loginpage" render={props => <LoginPage {...props} />} />
            <Route exact path="/signup" render={props => <SignUpPage {...props} />} />
            <Route exact path="/getGoat" render={props => <GetGoat {...props} />} />
            <Route exact path="/map" render={props => <Map {...props} />} />

          </Switch>
        </Router>
      </div>
    
  );
}

