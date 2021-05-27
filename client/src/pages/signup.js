// import React from "react";

// const SignUpPage = () => {
//   return <div>This is the Sign Up Page</div>;
// }

// export default SignUpPage;



import React, { useState }  from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import API from "../utils/API";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function SignUpPage(props) {
  const classes = useStyles();
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [email, setemail] = useState();
  const [password, setPassword] = useState();
  // const [submitted, setSubmitted]=useState(flase);

  function loadTrip() {
   
  };
  const handleSubmit = e => {
    e.preventDefault();
    // setSubmitted(true);
    console.log("email is " + email);
    console.log("password is " + password);
    if (email && password) {
      API.saveBook({
        firstName: firstname,
        lastName: lastname,
        email: email,
        password:password
      })
        
        .then(() => loadTrip())
        .catch(err => console.log(err));
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-textarea"
          label="First Name"
          placeholder="Required"
          multiline
          variant="outlined"
          name="firstname"
          onChange={e => setfirstname(e.target.value)}
          // {submitted && !firstname ?  <span>Please enter first name</span>:null}
         
        />
        <TextField
          id="standard-textarea"
          label="Last Name"
          placeholder="Required"
          multiline
          variant="outlined"
          name="lastname"
          onChange={e => setlastname(e.target.value)}
        />
        <TextField
          id="standard-textarea"
          label="Email Address"
          placeholder="Required"
          multiline
          variant="outlined"
          name="email"
          onChange={e => setemail(e.target.value)}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          placeholder="Required"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          onChange={e => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
}