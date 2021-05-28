import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


const LoginPage = (props) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        
        <TextField
          id="standard-textarea"
          label="Email Address"
          placeholder="Required"
          multiline
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          placeholder="Required"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </div>
    </form>
  );
}

export default LoginPage;