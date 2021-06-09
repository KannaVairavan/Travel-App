
const axios =require('axios');

module.exports = {
  nearbySearch: function(req, res) {

    const response = axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyDWZTyEpdkP5oPR_6BPIjgv9IPXNzybgMc")
    .then(res => {
      console.log(res.data.results);
    })
    res.send(response);
  }
};
