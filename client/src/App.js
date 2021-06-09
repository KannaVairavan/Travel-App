import React from "react";
import { useState, useEffect }  from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import SearchAppBar from "./components/Nav";
import GetGoat from './pages/roadGoatSearch'
import Home from "./pages/index";
import Dashboard from "./pages/dashboard";
import LoginPage from "./pages/loginpage";
import SignUpPage from "./pages/signup";
import { makeStyles } from "@material-ui/core/styles";
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



export default function App() {
  const [loggedIn, setloggedIn] = useState(false);
 const classes = useStyles();
 return (
     <div className = {`${classes.container} ${classes.root}`}>
       <Router>
         <SearchAppBar />
         <Switch>
           <Route exact path="/" component={Home}/>    
           <Route exact path="/dashboard" component={() => <Dashboard authorized={true}/>} />
           <Route exact path="/loginpage" component={LoginPage} />
           <Route exact path="/signup" component={SignUpPage}/> 
           {/* <Route exact path="/getGoat" component={GetGoat} /> */}
         </Switch>
       </Router>
       <CssBaseline />
     </div>
 );
}
