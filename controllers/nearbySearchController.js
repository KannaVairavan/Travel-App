
const axios =require('axios');


module.exports = {
  nearbySearch: function(req, res) {
    let Lat = req.query.lat
    let Long = req.query.lon

    const restaurant = axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${Lat},${Long}&radius=40233&type=restaurant&key=AIzaSyDWZTyEpdkP5oPR_6BPIjgv9IPXNzybgMc`)
    .then(resp => {
      return({restaurant: resp.data.results.slice(0,3)});
    })
    const park = axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${Lat},${Long}&radius=40233&type=park&key=AIzaSyDWZTyEpdkP5oPR_6BPIjgv9IPXNzybgMc`)
    .then(resp => {
      return({park: resp.data.results.slice(0,3)});
    })
    const rv_park = axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${Lat},${Long}&radius=40233&type=rv_park&key=AIzaSyDWZTyEpdkP5oPR_6BPIjgv9IPXNzybgMc`)
    .then(resp => {
      return({rv_park: resp.data.results.slice(0,3)});
    })
    const tourist_attraction = axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${Lat},${Long}&radius=40233&type=tourist_attraction&key=AIzaSyDWZTyEpdkP5oPR_6BPIjgv9IPXNzybgMc`)
    .then(resp => {
    return({tourist_attraction: resp.data.results.slice(0,3)});
    })
    Promise.all([restaurant, park, rv_park, tourist_attraction]).then((values) => {
      console.log(values);
      res.send({...values[0], ...values[1], ...values[2], ...values[3]});
    });
    
  }
};
