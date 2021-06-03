import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
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

  


  const handleFormSubmit = (username, password) => {
  // Preventing the default behavior of the form submit (which is to refresh the page)
    console.log(username);
    console.log(password);

  
  }



  const Form = () => {
    const classes = useStyles();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    
    return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
          <TextField
          onChange= {(event) => {
            setUsername(event.target.value)
          }}
          value= {username}
          id="standard-textarea"
          label="Username"
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
            handleFormSubmit(username, password)
          }}
          variant="contained" color="primary">
            Submit
        </Button>
      </div>
    </form>
    );


  }

export default Form;
