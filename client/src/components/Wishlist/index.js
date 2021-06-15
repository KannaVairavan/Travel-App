import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import Container from "../Container";
import LocationCard from "../Location";

function Wishlist(props) {
  // Setting our component's initial state
  const [wishList, setWishList] = useState([]);
  const [locdata, setLocData] = useState([]);
  const [formObject, setFormObject] = useState({
    wish: "",
  });
  const [userid, setUserID] = useState(localStorage.getItem("userid") || "");

  // Load all wishlist and store them with setwishlist
  useEffect(() => {
    loadWishLists();
  }, []);

  // Load all wishlist and set them to setWishLists
  function loadWishLists() {
    // getuserid();
    const resultsObject = [];
    
    API.getwishlists()
      .then((res) => {
        console.log("user id", userid);
        res.data
          .filter((data) => data.user[0] === userid)
          .map((item, index) => {
            if (item.location_data.length > 0) {
              const wl_id = item._id;  
              console.log("wl_id", wl_id)
              item.location_data[0]['wl_id']=item._id;
              resultsObject.push(item.location_data[0]);
             
            }
          });
        console.log("list", res.data);
        setWishList(res.data);
        console.log("obj", resultsObject);
        setLocData(resultsObject);
        console.log("obj", resultsObject);
      })
      .catch((err) => console.log(err));
  }
  // Delete wishlist by id then reload wishlists
  function deleteWishList(id) {
    API.deletewishlist(id)
      .then((res) => loadWishLists())
      .catch((err) => console.log(err));
  }

  // Update wishlist by id
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  return (
    <Container>
      <LocationCard data={locdata} />
    </Container>
  );
}
export default Wishlist;
