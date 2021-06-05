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
    firstName:"",
    lastName:"",
    email:"",
    password:""


  })

  const [submitted, setSubmitted]=useState(false);
 

  function loadTrip() {
   
  };
  // Update wishlist by id
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  const handleFormSubmit = e => {
    e.preventDefault();
     setSubmitted(true);
    
    console.log("email is " + formObject.email);
    console.log("password is " + formObject.password);
    console.log("firstname is " + formObject.firstName);
    console.log("lastname is " + formObject.lastName);
    if (formObject.email && formObject.password) {
      API.saveUser({
        firstName: formObject.firstName,
        lastName: formObject.lastName,
        email: formObject.email,
        password:formObject.password

      })
      
      .then ((res)=>{
          console.log(res)
         
         
          if (res.status === 200) {
            
            props.setloggedIn(true);
                      

           } else {
            alert('Invalid account details, failed to register.');
           }
      })
      .then(() => setFormObject({
        firstName: "",
        lastName: "",
        email: "",
        password:""
      }))
           
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
          name="firstName"
          value={formObject.firstName}
          onChange={handleInputChange}
          
         
        />
        {submitted && !formObject.firstName ? <span> Please enter first name</span>:null}
       
        <TextField
          id="standard-textarea"
          label="Last Name"
          placeholder="Required"
          multiline
          variant="outlined"
          name="lastName"
          value={formObject.lastName}
          onChange={handleInputChange}
        />
           {submitted && !formObject.lastName ? <span> Please enter last name</span>:null}
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
           {submitted && !formObject.email ? <span> Please enter email</span>:null}
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
            color="primary" type="submit">
           
          Submit
        </button>
      </div>
    </form>
 
  );
}