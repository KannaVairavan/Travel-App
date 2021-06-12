import React from 'react';
import { useState }  from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
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

  const [register, setRegister] = useState(false);

  const [formObject, setFormObject] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:""
  })

  // const signupUser = async (firstName, lastName, email,password) => {
  //   try {
  //     const config = {headers: { 'Content-Type': 'application/json'}}
  //     const body = { firstName, lastName, email, password}
  //     const res = await API.signup(body);
  //     console.log(res)
  //   } catch (err){
  //     console.log(err)
  //   }
  // }

  // Update wishlist by id
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  
  const handleFormSubmit = e => {
      e.preventDefault();
    if (formObject.email && formObject.password) {
      API.signup( setFormObject({
        firstName: "",
        lastName: "",
        email: "",
        password:""
      }))  
      .then ((res)=>{
          console.log("res-token", res);
          if (res.status === 200) {
            localStorage.setItem("usertoken", res)
           } else {
            alert('Invalid account details, failed to register.');
           }
      })
           
        .catch(err => console.log(err));
    
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
        {/* {submitted && !formObject.firstName ? <span> Please enter first name</span>:null} */}
       
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
           {/* {submitted && !formObject.lastName ? <span> Please enter last name</span>:null} */}
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
           {/* {submitted && !formObject.email ? <span> Please enter email</span>:null} */}
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
}