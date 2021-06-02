import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import { List, ListItem } from "../List";
import Container from "../Container"
import {Grid} from '@material-ui/core';

import DeleteBtn from "../../components/DeleteBtn";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      margin: theme.spacing(1)
      },
    }));
function Wishlist(){
    // Setting our component's initial state
    const [wishList, setWishList]=useState([])
    const [formObject, setFormObject]=useState({
        wish:""
    })
    const classes = useStyles();
    // Load all wishlist and store them with setwishlist
    useEffect(() => {
        loadWishLists()
    }, [])

    // Load all wishlist and set them to setWishLists
    function loadWishLists(){
        API.getwishlists()
        .then(res =>
            setWishList(res.data)
        )
        .catch(err => console.log(err));
    }

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
            <h2>Wish List</h2>
            <Grid Container xs={4}>
                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                      <Grid item >
                      <TextField
                            id="standard-textarea"
                            label="Wish"
                            placeholder="Required"
                            multiline
                            variant="outlined"
                            name="wish"
                            value={formObject.wish}
                            onChange={handleInputChange}
                            
                       />
                        {/* <input
                            onChange={handleInputChange}
                            name="wish"
                            placeholder="wish (required)"
                            value={formObject.wish}
                        /> */}
                        <Button
                            disabled={!(formObject.wish)}
                            onClick={handleFormSubmit}
                            variant="contained" color="primary"
                        >
                            Submit
                        </Button>
                     </Grid>  
                    </div>
                </form>
            </Grid>

            {wishList.length ? (
                <Grid Container xs={4}>
                <List>
                    {wishList.map(W_list =>{
                        return(
                           
                            <ListItem key={W_list._id}>
                                 <Grid item >
                                    <a href={"/wishlist/" + W_list._id}>
                                        <strong>
                                        {W_list.wish} 
                                        </strong>
                                    </a>
                                    <DeleteBtn onClick={() => deleteWishList(W_list._id)} />
                                </Grid>
                            </ListItem>
                           
                        );
                    })}
                </List>
                </Grid>
            ): (
                <h3>No Results to Display</h3>
            )}           
        
       </Container>
    )
    
};
export default Wishlist;