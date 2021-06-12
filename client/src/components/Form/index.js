import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import API from "../../utils/API";
// This file exports the Input, TextArea, and FormBtn components

  const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    margin: theme.spacing(1)
    },
  }));

  


  // const handleFormSubmit = (event, email, password) => {
  // // Preventing the default behavior of the form submit (which is to refresh the page)
  //   event.preventDefault();
  //   console.log(email);
  //   console.log(password);
  //   API.login({email, password})

  //   .then((res) => {
  //     console.log("res login" , res);

  //     if(res.status === 200){
  //       localStorage.setItem("usertoken", res)
  //       alert("User is logged in")
  //     } else {
  //       alert("cannot login");
  //     }
  //   })
  
  // }



  const Form = () => {
    const classes = useStyles();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
     


      const handleFormSubmit = (event, email, password) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();
      console.log(email);
      console.log(password);
      API.login({email, password})
  
      .then((res) => {
        console.log("res login" , res);
  
        if(res.status === 200){
          localStorage.setItem("usertoken", res)
          alert("User is logged in")
        } else {
          alert("cannot login");
        }
      })
    
    }
    return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
          <TextField
          onChange= {(event) => {
            setEmail(event.target.value)
          }}
          value= {email}
          id="standard-textarea"
          label="Email"
          placeholder="Required"
          multiline
          variant="outlined"
        />
        <TextField
          onChange= {(event) => {
            setPassword(event.target.value)
          }}
          value= {password}
          id="outlined-password-input"
          label="Password"
          placeholder="Required"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <Button
          onClick={(event) => {
            handleFormSubmit(email, password)
          }}
          variant="contained" color="primary">
            Submit
        </Button>
      </div>
    </form>
    );


}

export default Form;
