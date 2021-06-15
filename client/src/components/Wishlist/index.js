import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import Container from "../Container";
import { Grid } from "@material-ui/core";
import DeleteBtn from "../../components/DeleteBtn";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import LocationCard from "../Location";
    
function Wishlist(props){
    // Setting our component's initial state
    const [locdata, setLocData] = useState([]);
    
  
    const [userid, setUserID]=useState(
        localStorage.getItem('userid') || ''
      );
    
    
    const classes = useStyles();
    // Load all wishlist and store them with setwishlist
    useEffect(() => {
        loadWishLists();
      
    }, [])

  const classes = useStyles();
  // Load all wishlist and store them with setwishlist
  useEffect(() => {
    loadWishLists();
  }, []);


    // Load all wishlist and set them to setWishLists
    function loadWishLists(){
        // getuserid();
       
        const resultsObject=[] ;
        API.getwishlists()
        .then((res) => {
        //    '60c5f9858348f2450c1ae919'
            console.log('user id', userid);
            res.data.filter((data)=>data.user[0]===userid).map((item, index) => {

  // Load all wishlist and set them to setWishLists
  function loadWishLists() {
    const resultsObject = [];
    API.getwishlists()
      .then((res) => {
        res.data.map((item, index) => {
          if (item.location_data.length > 0) {
            resultsObject.push(item.location_data[0]);
          }
        });
        console.log("list", res.data);
        setWishList(res.data);
        console.log("obj", resultsObject);
        setLocData(resultsObject);
        console.log("obj", resultsObject);
      })

    // Delete wishlist by id then reload wishlists
    function deleteWishList(id){
        API.deletewishlist(id)
            .then(res =>loadWishLists())
            .catch(err => console.log(err))
    }
    // Update wishlist by id
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };
    
    // When the form is submitted, use the API.savewishlist method to save the wishlist data
    // Then reload wishlist from the database
    function handleFormSubmit(event){
        event.preventDefault();
        if (formObject.wish ) {
            API.savewishlist({
                wish:formObject.wish
            })
              .then(()=>setFormObject({
                  wish:""
              }))
              .then(()=>loadWishLists())
              .catch(err => console.log(err));
        }

    }
    
    return(
        <Container>
                    
                    <LocationCard  data={locdata} />
            

  // When the form is submitted, use the API.savewishlist method to save the wishlist data
  // Then reload wishlist from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.wish) {
      API.savewishlist({
        wish: formObject.wish,
      })
        .then(() =>
          setFormObject({
            wish: "",
          })
        )
        .then(() => loadWishLists())
        .catch((err) => console.log(err));
    }
  }

  return (
    <Container>
      <LocationCard data={locdata} />
    </Container>
  );
}
export default Wishlist;
