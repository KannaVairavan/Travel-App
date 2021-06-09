import axios from "axios";

export default {
  // Gets all wishlist
  getwishlists: function() {
    return axios.get("/api/wishlist");
  },
  // Gets the wishlist with the given id
  getwishlist: function(id) {
    return axios.get("/api/wishlist/" + id);
  },
  // Deletes the wishlist with the given id
  deletewishlist: function(id) {
    return axios.delete("/api/wishlist/" + id);
  },
  // Saves a wishlist to the database
  savewishlist: function(wishlistData) {
    return axios.post("/api/wishlist", wishlistData);
  },

  saveUser:function(userData){
    return axios.post("/api/user", userData);
  },
  login:function(userData){
    return this.axios.post("/api/login", userData);
  },
  signup: function(userData){
    return axios.post("/api/signup", userData);
  },
  nearbySearch:function(Lat, Long){
    return axios.get('/api/nearbySearch', {
      params: {
        lat: Lat,
        lon: Long
      }
    });
  }

// getCampgroundSearch: function () {
//   return axios.get()

// }

};
