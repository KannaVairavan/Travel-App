import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "../Grid";
import {input, FormBtn} from '../FormBtn'
import { SearchGoatByID } from "../../utils/SearchLocation";
import "./style.css";
import API from "../../utils/API";

function LocationCard({ data },props) {
  const [results, setResults] = useState([]);
  const [detailedResults, setDetails] = useState([]);

    useEffect(() => {
      console.log("LocationCard", data)
      setResults(data);
      if (data.length) {
        // console.log(data[0].details.data.attributes.foursquare_url)
        console.log("Passed Data: ", data );
      } console.log('no data')

    }, [data]);


  const preciseRating = (number) => {
    return(
      number.toPrecision(3)
    )
  }

  const handleFormSubmit=(event, index)=>{
    console.log(index);
      event.preventDefault();
        
      const locationValues = results[index]
        console.log("location data",locationValues);
        API.savewishlist({
            location_id:locationValues.city_id,
            location:locationValues.cityName,
            coords_Lat:locationValues.coords.lat,
            coords_Lon:locationValues.coords.lon
          })
          .then ((res)=>{
          console.log(res)
        })
        .catch(err => console.log(err));
  }

  return (
    <Container className={"-results-card-body "}>
      <Row className={"-title-row"}>
        {!results.length ? (
          <h1>Search for a Location</h1>
        ) : (
          <h1> {results.length} Matching locations!</h1>
        )}
      </Row>
      <Row className={"-results-row row"}>
        {results.map((locations, index) => (
          <Col key={index} size="md-2">
            <div className="card" style={{ width: "18rem", margin: "10px" }}>
              <img
                src={locations.image_info.img_src== null? "https://via.placeholder.com/150.png": locations.image_info.img_src}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title" >{locations.cityName}</h5>

                <p className="card-text">
                {/* {locations.details.data.attributes.average_rating == null} ? "na" : "Tourist Rating: " {locations.details.data.attributes.average_rating} */}
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item cit-coordinates">
                  Lat: {locations.coords.lat} <br />
                  Long: {locations.coords.lon}
                </li>
                <h2>
                  Park Name
                </h2>
                {locations.park.map((park) => {
                  return(
                    <div>
                    {park.name}
                  </div>
                  )
                })}
                 <h2>
                  Restaurants
                </h2>
                {locations.restaurant.map((restaurant) => {
                  return(
                    <div>
                    {restaurant.name}
                  </div>
                  )
                })}
                <h2>
                  RV Parks
                </h2>
                {locations.rv_park.map((rv_park) => {
                  return(
                    <div>
                    {rv_park.name}
                  </div>
                  )
                })}
                <h2>
                  Tourist Attractions
                </h2>
                {locations.tourist_attraction.map((tourist_attraction) => {
                  return(
                    <div>
                    {tourist_attraction.name}
                  </div>
                  )
                })}
              </ul>
              <div className="card-body">
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
                
                <FormBtn  onClick={(event)=>handleFormSubmit(event, index)} >Add to fav</FormBtn>
                
              </div>
            </div>
          </Col>
          
        ))}
      </Row>
    </Container>
  );
}

export default LocationCard;
