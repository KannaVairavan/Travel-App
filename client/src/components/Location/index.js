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

function LocationCard({ data  }, props) {
  // console.log('ls email', email);
  const [results, setResults] = useState([]);

  const [userid, setUserID]=useState(
    localStorage.getItem('userid') || ''
  );
  
  useEffect(() => {
    if (data.length) {
      setResults(data);
    }
    console.log("no data", window.location.href);
  }, [data]);

  const preciseRating = (number) => {
    return number.toPrecision(3);
  };

  

  const handleFormSubmit = (event, index) => {
    // console.log(index);
    event.preventDefault();
   
    // getuserid(email);


    const locationValues = results[index];
    // console.log("location data", locationValues);
    console.log(userid);
    if (!userid){
      alert("Login to save favorites!")
    } else 
    {
    API.savewishlist({
      location_data: locationValues,
      user: userid,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    }  
  };


  function deleteWishList(id) {
    console.log(id)
    API.deletewishlist(id)
       .then((res) =>window.location.reload())
       .catch((err) => console.log(err));
  }
  

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
      {window.location.href == "http://localhost:3000/home" ||
      window.location.href == "http://localhost:3000/" ? (
        <Row className={"-title-row"}>
          {!results.length ? (
            <h1>Planning a trip?</h1>
          ) : (
            <h1>
              {" "}
              We found your new destination! <br /> <br />{" "}
            </h1>
          )}
        </Row>
      ) : (
        <Row className={"-title-row"}>
          {!results.length ? (
            <h1>Welcome Back</h1>
          ) : (
            <h1>
              {" "}
              Your wishlist <br /> <br />{" "}
            </h1>
          )}
        </Row>
      )}
      <Row className={"-results"}>
        {results.map((locations, index) => (
          <Container className={""} key={`card-holder-${index}`}>
            <Row className={"-results-body"}>
              <Col size={"md-1 location-primary-results"}>
                <div className="card" style={{ width: "20rem", margin: "0px" }}>
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
                      <Col size={"md-4 rating"}>
                        <h5 className="card-text city-rating-title">Rating</h5>
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
                      <Row className={"md-6 card-links"}>
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

                      <Col size={"md-6"}>
                        {window.location.href == "http://localhost:3000/home" ||
                        window.location.href == "http://localhost:3000/" ? (
                          <FormBtn
                            purpose={"add"}
                            onClick={(event) => handleFormSubmit(event, index)}
                          >
                            Add to fav
                          </FormBtn>
                        ) : (
                          <FormBtn
                            purpose={"delete"}
                            onClick={() => deleteWishList(locations.wl_id)}
                          >
                            Delete
                          </FormBtn>
                        )}
                      </Col>
                      
                    </Row>
                  </div>
                </div>
              </Col>
              <Col size={"md-2 location-perks"}>
                <Row className={"-accordion"}>
                  <Accordion title={"Parks"} ids={`parks-${index}`}>
                    <PerksCard
                      target={locations.park}
                      title={"park"}
                    ></PerksCard>
                  </Accordion>
                  <Accordion title={"Restaurants"} ids={`restaurants-${index}`}>
                    <PerksCard
                      target={locations.restaurant}
                      title={"restaurant"}
                    ></PerksCard>
                  </Accordion>
                  <Accordion title={"RV Parks"} ids={`rv-parks-${index}`}>
                    <PerksCard
                      target={locations.rv_park}
                      title={"rv_park"}
                    ></PerksCard>
                  </Accordion>
                  <Accordion
                    title={"Tourist Attractions"}
                    ids={`tourist-attractions-${index}`}
                  >
                    <PerksCard
                      target={locations.tourist_attraction}
                      title={"tourist_attraction"}
                    ></PerksCard>
                  </Accordion>
                </Row>
                <Row className={"-map"}>
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
