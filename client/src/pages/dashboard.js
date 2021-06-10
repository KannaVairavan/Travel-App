import React from "react";
import GoogleMap from "../components/Map";
import Wishlist from "../components/Wishlist";
import {Redirect} from 'react-router-dom';
import TravelApp from "../pages/index";


function Dashboard ({authorized}) {

  if(!authorized){
    return <Redirect to="/signup"/>
  }
  else{
  return <div>
    <GoogleMap/>
    <TravelApp/>
    <Wishlist/>
  </div>;

  }
}

export default Dashboard;