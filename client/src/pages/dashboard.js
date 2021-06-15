import React from "react";
import GoogleMap from "../components/Map";
import Wishlist from "../components/Wishlist";
import {Redirect} from 'react-router-dom';
import TravelApp from "../pages/index";


function Dashboard (props) {
 let loggedIn = localStorage.getItem("loggedIn");
  if(loggedIn === 'true'){
  return (
  <div>

    {/* <GoogleMap/> */}
    {/* <TravelApp /> */}
    <Wishlist />
  </div>

)
}
else {
  return(
    <Redirect to="/loginpage"/>
  )
}
}


export default Dashboard;