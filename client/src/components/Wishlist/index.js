import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import Container from "../Container"
import {Grid} from '@material-ui/core';
import DeleteBtn from "../../components/DeleteBtn";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import LocationCard from "../Location";
import MapGl from "../MapGl";
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
    const [locdata, setLocData] = useState([]);
    const [formObject, setFormObject]=useState({
        wish:""
    })
    const classes = useStyles();
    // Load all wishlist and store them with setwishlist
    useEffect(() => {
        loadWishLists();
      
    }, [])

    const [viewport, setViewport] = useState({
        width: 500,
        height: 500,
        latitude: 38.00,
        longitude: -97.00,
        zoom: 3
      });

    // Load all wishlist and set them to setWishLists
    function loadWishLists(){
        const resultsObject=[] ;
        API.getwishlists()
        .then((res) => {
           
            res.data.map((item, index) => {

                    if (item.location_data.length >0){
                     resultsObject.push(item.location_data[0]);
                    }    
               
            })
            console.log("list",res.data)
            setWishList(res.data);
            console.log("obj",resultsObject)
            setLocData(resultsObject);
            console.log("obj",resultsObject);
            
        })    
            
        
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
            <h2>Favorite Locations</h2>
            
           
            
                    <LocationCard  data={locdata}/>
            
            
            {/* {wishList.length ? (
                <Grid >
                    {console.log("locdata",results)}
                    
                    {wishList.map(W_list =>{
                        return(
                           
                            <div key={W_list._id}>
                                 
                               
                                <LocationCard data={W_list.location_data}/> 
                                
                            </div>
                           
                        );

                    })}
              
                </Grid>
            ): (
                <h3>No Results to Display</h3>
            )}            */}

            <MapGl results={locdata} viewport={viewport} setViewport={setViewport}/>
            
        </Container>
    )
    
};
export default Wishlist;
