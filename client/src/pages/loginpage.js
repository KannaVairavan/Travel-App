import React from "react";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import API from "../utils/API";

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
    console.log(formObject.email);
    console.log(formObject.password);
    if(formObject.email && formObject.password){
    console.log("testing1")
    API.login({
      email: formObject.email,
      password: formObject.password
    })
    .then((res) => { 
      console.log("testing3")
      console.log("res login" , res);
      if(res.status === 200){
        localStorage.setItem("usertoken", res)
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
