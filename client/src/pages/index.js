import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { Input, TextArea, FormBtn } from "../components/Form";
import { Input, FormBtn } from "../components/FormBtn";
import { SearchGoat, SearchGoatByID } from "../utils/SearchLocation";
import LocationCard from "../components/Location";
import MapGl from "../components/MapGl";



function TravelApp() {
  const [searchInput, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [holder, setHolder] = useState([]);
  const [detailsHolder, setDetails] = useState([]);

  const [viewport, setViewport] = useState({
    width: 1500,
    height: 1000,
    latitude: 38.00,
    longitude: -97.00,
    zoom: 3
  });

  useEffect(() => {
    setResults(holder);
    setDetails(detailsHolder);
  }, [holder, detailsHolder]);


  const HandleInput = (e) => {
    e.preventDefault();
    return setSearch(e.target.value);
  };

  const HandleClick = async (e, searchInput) => {
    e.preventDefault();
    SearchGoat(searchInput).then((res) => {
      const resultsObject = [];
      //slice(0,1) only returns first result in index
      res.data.data.slice(0,1).map((item, index) => {
        const id = index;
        const city_id = item.id;
        const image_info = {
          image_src_id: item.relationships.featured_photo.data || null,
          img_src: null,
        };
        const cityName = item.attributes.name;
        const coords = {
          lat: item.attributes.latitude,
          lon: item.attributes.longitude,
        };
        //GooglePlaces API request to back end
        API.nearbySearch(coords.lat, coords.lon)
        .then((response) => {
          resultsObject.push({ id, cityName, coords, city_id, image_info, restaurant: response.data.restaurant, park: response.data.park, rv_park: response.data.rv_park, tourist_attraction: response.data.tourist_attraction });
          // add image link to the data structure
          for (let i = 0; i < res.data.included.length; i++) {
            if (i > resultsObject.length - 1) {
              continue;
            }
            try {
              let image_url = res.data.included[i].attributes.image.thumb;
              resultsObject[i].image_info.img_src = image_url;
            } 
            catch (error) {
              let image_url = "https://via.placeholder.com/150.png";
              resultsObject[i].image_info.img_src = image_url;
            } 
          }
          resultsObject.forEach(async (item) => {
            await SearchGoatByID(item.city_id).then(async (res, index) => {
              if (res.data.data.id === item.city_id) {
                item["details"] = {
                  data: res.data.data,
                  includes: res.data.included,
                };
              }
            });
            setHolder(resultsObject);
          });
        })
      })      
    });
  };

  return (
    <Container className={"-main-body "}>
      <Container className={"-search-bar"}>
        <Row className={"-search"}>
          <Col size="md-4">
            <form>
              <Input
                onChange={(e) => {
                  HandleInput(e);
                }}
                name="input"
                value={searchInput}
                placeholder="Search for a location"
              />
              <FormBtn
                stylename={"location-search"}
                onClick={(e) => {
                  HandleClick(e, searchInput);
                }}
              >
                Enter Search
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
      <Container className="-results-main container-fluid">
        <LocationCard data={results}/>
      </Container>
      <MapGl results={results} viewport={viewport} setViewport={setViewport}/>
    </Container>
  );
}

export default TravelApp;
