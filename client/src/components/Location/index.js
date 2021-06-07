import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "../Grid";
import { SearchGoatByID } from "../../utils/SearchLocation";
import "./style.css";
import API from "../../utils/API";

function LocationCard({ data }) {
  const [results, setResults] = useState([]);
  
  const [detailedResults, setDetails] = useState([]);

  const [formObject, setFormObject]=useState({
    location:"",
    coords_Lat:"",
    coords_Lon:""


  })

  useEffect(() => {
    setResults(data);
    // setDetails(data);
    callResults();
    
    
  }, [data]);

  async function callResults() {
    console.log("Passed Data: ", data);
  }

  
   const handleFormSubmit=()=>{
    
      // event.preventDefault();
    //  const locationValues = event.target.attributes;
    //  console.log("formobject",formObject)
     
     const locationValues = results[0]
     console.log("location data",locationValues);
        API.savewishlist({
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
                  {/* Tourist Rating: {locations.details.data.attributes.foursquare_url} */}
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item cit-coordinates">
                  Lat: {locations.coords.lat} <br />
                  Long: {locations.coords.lon}
                </li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
              </ul>
              <div className="card-body">
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
                {/* {setFormObject({
                    location:locations.cityName,  
                    coords_Lat:locations.coords.lat,
                    coords_Lon:locations.coords.lon
                  
                  }) } */}
                <button  onClick={handleFormSubmit} >Add to fav</button>
                
              </div>
            </div>
          </Col>
          
        ))}
      </Row>
    </Container>
  );
}

export default LocationCard;
