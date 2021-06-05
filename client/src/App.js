import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchAppBar from "./components/Nav";
import GetGoat from './pages/roadGoatSearch'
import Home from "./pages/index";
import Dashboard from "./pages/dashboard";
import LoginPage from "./pages/loginpage";
import SignUpPage from "./pages/signup";
import { makeStyles } from "@material-ui/core/styles";
import MapGl from "./components/MapGl";
import { CssBaseline } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage:`url(${process.env.PUBLIC_URL + "/assets/balkan-campers-ON2TRrhgOBU-unsplash.jpg"})`,
    backgroundRepeat:'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
}))

 function App() {


  const classes = useStyles();
  return (
      <div className = {`${classes.container} ${classes.root}`}>
        <Router>
          <SearchAppBar/>
          <Switch> 
            <Route exact path="/" render={props => <Home {...props} />} />          
            <Route exact path="/dashboard" render={props => <Dashboard {...props} />} />
            <Route exact path="/loginpage" render={props => <LoginPage {...props} />} />
            <Route exact path="/signup" render={props => <SignUpPage {...props} />} />
            <Route exact path="/getGoat" render={props => <GetGoat /> }/>
            <Route exact path="/map" component={MapGl}></Route>
          </Switch>
        </Router>
        <CssBaseline />
      </div>
  );
}

export default App;
