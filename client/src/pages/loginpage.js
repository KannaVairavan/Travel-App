import React from "react";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import API from "../utils/API";
import {Redirect} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function LoginPage() {
  const classes = useStyles();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [formObject, setFormObject] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    if(formObject.email && formObject.password){
    API.login({
      email: formObject.email,
      password: formObject.password
    })
    .then((res) => { 
      console.log("testing3")
      console.log("res login" , res);
      if(res.status === 200){
        localStorage.setItem("user", res.data.email)
        setLoggedIn(true);
        alert("User is logged in")
      } else {
        alert("cannot login");
      }
    })
    .then(() => setFormObject({
      email: "",
      password:""
    }))
    .catch(err => console.log(err));

  }
  }

  if(loggedIn === true){
    return <Redirect to="/dashboard"/>
  } else{
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-textarea"
          label="Email Address"
          placeholder="Required"
          multiline
          variant="outlined"
          name="email"
          value={formObject.email}
          onChange={handleInputChange}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          name="password"
          placeholder="Required"
          type="password"
          // autoComplete="current-password"
          variant="outlined"
          value={formObject.password}
          onChange={handleInputChange}
        />
        <button
          onClick={handleFormSubmit}
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

}
