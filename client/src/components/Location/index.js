import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "../Grid";
import { input, FormBtn } from "../FormBtn";
import DirectionsBusTwoToneIcon from "@material-ui/icons/DirectionsBusTwoTone";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import FavoriteButton from "../FavoriteButton";
import "./style.css";
import API from "../../utils/API";
import PerksCard from "../PerksCard";
import Accordion from "../Accordion";
import MapGl from "../MapGl";

function LocationCard({ data }, props) {
  const [results, setResults] = useState([]);

  useEffect(() => {

    if (data.length) {
      setResults(data);
    }
    console.log("no data");
  }, [data]);

  const preciseRating = (number) => {
    return number.toPrecision(3);
  };

  const handleFormSubmit = (event, index) => {
    event.preventDefault();

    const locationValues = results[index];
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

  const enumerateCovid = (object) => {
    const targetURLs = [];
    for (const [key, value] of Object.entries(object)) {
      targetURLs.push(`${key}: ${value.url}`);
    }
    // console.log(targetURLs);
    return targetURLs[0].split(": ")[1];
  };

  return (
    <Container className={"-results-card-body "}>
      <Row className={"-title-row"}>
        {!results.length ? ( <h1>Planning a trip?</h1> ) : ( <h1> We found your new destination! <br /> <br /> </h1> )}
      </Row>
      <Row className={"-results"}>
        {results.map((locations, index) => (
          <Container fluid key = {`card-holder-${index}`}>
            <Row className={"-results-body"} >
              <Col
                size={"md-6 location-primary-results"}
                
              >
                <div
                  className="card"
                  style={{ width: "20rem", margin: "10px" }}
                >
                  <img
                    src={
                      locations.image_info.img_src == null
                        ? "https://via.placeholder.com/150.png"
                        : locations.image_info.img_src
                    }
                    className="card-img-top"
                    alt={`City of ${locations.cityName}`}
                  />
                  <div className="card-body">
                    <Row className="-card-header-row">
                      <Col size={"md-8"}>
                        <h5 className="card-title">{locations.cityName}</h5>
                      </Col>
                      <Col size={"md-4 rating"} >
                        <h5 className="card-text city-rating-title">
                          
                          Rating
                        </h5>
                        <h5 className="card-text city-rating">
                          {preciseRating(
                            locations.details.data.attributes.average_rating
                          )}
                        </h5>
                      </Col>
                    </Row>
                  </div>

                  <div className="card-body">
                    <Row className="-card-header-row">
                      <Row className={"md-6 card-links"} >
                        <a
                          href={
                            locations.details.data.attributes.getyourguide_url
                          }
                          target="_blank"
                          className={"guide-icon"}
                        >
                          <DirectionsBusTwoToneIcon
                            className={"guide-icon"}
                            fontSize={"large"}
                          />
                        </a>
                        <a
                          href={locations.details.data.attributes.wikipedia_url}
                          target="_blank"
                          className={"guide-icon"}
                        >
                          <LocalLibraryIcon fontSize={"large"} />
                        </a>
                        <a
                          href={enumerateCovid(
                            locations.details.data.attributes.covid
                          )}
                          target="_blank"
                          className={"guide-icon"}
                        >
                          <LocalHospitalIcon
                            color="secondary"
                            fontSize={"large"}
                          />
                        </a>
                      </Row>
                      <Col size={"md-6"} >
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
              <Col size={"md-6 location-perks"} >
                <Row className={"-accordion"}>
                  <Accordion
                    title={"Parks"}
                    id={"Parks"}
                  >
                    <PerksCard
                      target={locations.park}
                      title={"park"}
                    ></PerksCard>
                  </Accordion>
                  <Accordion title={"Restaurants"} id={"Restaurants"}>
                    <PerksCard
                      target={locations.restaurant}
                      title={"restaurant"}
                    ></PerksCard>
                  </Accordion>
                  <Accordion title={"RV Parks"} id={"RV-Parks"}>
                    <PerksCard
                      target={locations.rv_park}
                      title={"rv_park"}
                    ></PerksCard>
                  </Accordion>
                  <Accordion
                    title={"Tourist Attractions"}
                    id={"Tourist-Attractions"}
                  >
                    <PerksCard
                      target={locations.tourist_attraction}
                      title={"tourist_attraction"}
                    ></PerksCard>
                  </Accordion>
                </Row>
                <Row className={"-map"} >
                  <MapGl coords={locations.coords} />
                </Row>
              </Col>
            </Row>
          </Container>
        ))}
      </Row>
    </Container>
  );
}

export default LocationCard;
