import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "../Grid";
import { input, FormBtn } from "../FormBtn";
import { SearchGoatByID } from "../../utils/SearchLocation";
import DirectionsBusTwoToneIcon from "@material-ui/icons/DirectionsBusTwoTone";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import FavoriteButton from "../FavoriteButton"
import "./style.css";
import API from "../../utils/API";

function LocationCard({ data }, props) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    console.log("LocationCard", data);
    setResults(data);
    if (data.length) {
      // console.log(data[0].details.data.attributes.covid["Travis County"].url);
      console.log("Passed Data: ", data);
    }
    console.log("no data");
  }, [data]);

  const preciseRating = (number) => {
    return number.toPrecision(3);
  };

  const handleFormSubmit = (event, index) => {
    console.log(index);
    event.preventDefault();

    const locationValues = results[index];
    console.log("location data", locationValues);
    API.savewishlist({
      location_id: locationValues.city_id,
      location: locationValues.cityName,
      coords_Lat: locationValues.coords.lat,
      coords_Lon: locationValues.coords.lon,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  // const enumerateCovid = (object) => {
  //   for (const [key, value] of Object.entries(locations.details.data.attributes.covid)
  // }
  const enumerateCovid = (object) => {
    const targetURLs = [];
    for (const [key, value] of Object.entries(object)) {
      targetURLs.push(`${key}: ${value.url}`);
    }
    console.log(targetURLs);
    return targetURLs[0].split(": ")[1];
  };

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
                src={
                  locations.image_info.img_src == null
                    ? "https://via.placeholder.com/150.png"
                    : locations.image_info.img_src
                }
                className="card-img-top"
                alt="..."
              />
              <FavoriteButton></FavoriteButton>
              <div className="card-body">
                <Row className="-card-header-row">
                  <Col size={"md-8"}>
                    <h5 className="card-title">{locations.cityName}</h5>
                  </Col>
                  <Col size={"md-4 rating-col"}>
                    <h5 className="card-text city-rating-title">Rating </h5>
                    <h5 className="card-text city-rating">
                      {preciseRating(
                        locations.details.data.attributes.average_rating
                      )}
                    </h5>
                  </Col>
                </Row>
              </div>
              <ul className="list-group list-group-flush">
                {/* <li className="list-group-item cit-coordinates">
                  Lat: {locations.coords.lat} <br />
                  Long: {locations.coords.lon}
                </li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li> */}
              </ul>
              <div className="card-body">
                <Row className="-card-header-row">
                  <Col size={"md-6 card-links"}>
                      <a
                        href={
                          locations.details.data.attributes.getyourguide_url
                        }
                        target="_blank"
                        className={"guide-icon"}
                      >
                        <DirectionsBusTwoToneIcon className={"guide-icon"} />
                      </a>
                    <a
                      href={locations.details.data.attributes.wikipedia_url}
                      target="_blank"
                      className={"guide-icon"}
                    >
                      <LocalLibraryIcon />
                    </a>
                    <a
                      href={enumerateCovid(
                        locations.details.data.attributes.covid
                      )}
                      target="_blank"
                      className={"guide-icon"}
                    >
                      <LocalHospitalIcon color="secondary" />
                    </a>
                  </Col>
                  <Col size={"md-6"}>


                    <FormBtn
                      onClick={(event) => handleFormSubmit(event, index)}
                    >
                      Add to fav
                    </FormBtn>


                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default LocationCard;
