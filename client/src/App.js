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

  //  useEffect(() => {
  //   setloggedIn(false);
      
  //   }, [loggedIn])
   
  // if(!token) {
  //   return <LoginPage setToken={setToken} />
  // }
  const testlogin=()=>{
    if (!loggedIn) {
      
      
      console.log(loggedIn);
     
    }
    console.log("app.js login status", loggedIn);
  }

  const classes = useStyles();
  return (
      <div className = {`${classes.container} ${classes.root}`}>
        {/* <Router>
            <SearchAppBar />
            <Switch> */}
              {/* Routes open to all users */}
                  {/* <Route exact path="/" component={Home} />
                  <Route exact path="/loginpage" component={LoginPage} />
                  <Route exact path="/signup" component={SignUpPage}  loggedIn={loggedIn} setloggedIn={setloggedIn}  />        */}

              {/* Routes for (authenticated) users */} 
                  {/* <Route exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/dashboard">
                      {loggedIn ? <Redirect to="/dashboard" /> : <Home />}
                  </Route>
            </Switch> */}
        {/* </Router> */}
              <Router>
                <SearchAppBar />
                  <Switch>
                      <Route exact path="/" render={props => <Home {...props} />} />    
                      <Route exact path="/dashboard"> 
                           <Redirect to="/dashboard" component={Dashboard} />  
                      </Route>      
                      {/* <Route exact path="/dashboard" render={props => <Dashboard {...props} />} />*/}
                      <Route exact path="/loginpage" render={props => <LoginPage {...props} />} /> 

                      <Route exact path="/signup" render={props => <SignUpPage {...props } loggedIn={loggedIn} setloggedIn={setloggedIn}/>}  />         
                      <Route exact path="/getGoat" render={props => <GetGoat {...props} />} /> 
                  </Switch>
              </Router>
        <CssBaseline />
      </div>
  );
}

// export default App;
