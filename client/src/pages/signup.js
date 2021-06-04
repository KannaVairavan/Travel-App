import React from 'react';
import { useState }  from 'react';
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
  const [signup, setSignup]=useState([])
  const [formObject, setFormObject]=useState({
    firstname:"",
    lastname:"",
    email:"",
    password:""


  })
  // const [firstname, setfirstname] = useState();
  // const [lastname, setlastname] = useState();
  // const [email, setemail] = useState();
  // const [password, setPassword] = useState();
  // const [submitted, setSubmitted]=useState(flase);

  function loadTrip() {
   
  };
  // Update wishlist by id
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    // setSubmitted(true);
    console.log("email is " + formObject.email);
    console.log("password is " + formObject.password);
    if (formObject.email && formObject.password) {
      API.saveUser({
        firstName: formObject.firstname,
        lastName: formObject.lastname,
        email: formObject.email,
        password:formObject.password

      }).then ((res)=>{
          console.log(res)
      })
      // if (response.ok) {
      //   <Redirect to="/dashboard"/>
      // } else {
      //   alert('Invalid account details, failed to register.');
      // }
        //make load trip a Get API call
       
        .catch(err => console.log(err));
    }
  };

  return (
    
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-textarea"
          label="First Name"
          placeholder="Required"
          multiline
          variant="outlined"
          name="firstname"
          value={formObject.firstname}
          onChange={handleInputChange}
          // {submitted && !firstname ?  <span>Please enter first name</span>:null}
         
        />
        <TextField
          id="standard-textarea"
          label="Last Name"
          placeholder="Required"
          multiline
          variant="outlined"
          name="lastname"
          value={formObject.lastName}
          onChange={handleInputChange}
        />
        
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
          // type="password"
          // autoComplete="current-password"
          variant="outlined"
          value={formObject.password}
          onChange={handleInputChange}
        />
        <Button 
            onClick={handleFormSubmit}
            variant="contained" 
            color="primary" type="submit">
          
          Submit
        </Button>
      </div>
    </form>
 
  );
}