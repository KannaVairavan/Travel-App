import React from "react";
import GoogleMap from "../components/Map";
import Wishlist from "../components/Wishlist";
import MapGl from "../components/MapGl";
const Dashboard = () => {
  return <div>
    <GoogleMap/>
    <MapGl/>
    <Wishlist/>
  </div>;
}

export default Dashboard;