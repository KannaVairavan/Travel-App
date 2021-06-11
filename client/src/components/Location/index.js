import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "../Grid";
import { input, FormBtn } from "../FormBtn";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { SearchGoatByID } from "../../utils/SearchLocation";
import DirectionsBusTwoToneIcon from "@material-ui/icons/DirectionsBusTwoTone";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import FavoriteButton from "../FavoriteButton";
import "./style.css";
import API from "../../utils/API";
import Card from "@material-ui/core/Card";
import Collapse from "@material-ui/core/Collapse";
import CardActions from "@material-ui/core/CardActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CardContent from "@material-ui/core/CardContent";

function LocationCard({ data }, props) {
  const [results, setResults] = useState([]);

  const [detailedResults, setDetails] = useState([]);

  useEffect(() => {
    console.log("LocationCard", data);

    if (data.length) {
      setResults(data);
    }
    console.log("no data");
  }, [data]);

  const preciseRating = (number) => {
    return number.toPrecision(3);
  };

  const handleFormSubmit = (event, index) => {
    // console.log(index);
    event.preventDefault();

    const locationValues = results[index];
    // console.log("location data", locationValues);
    API.savewishlist({
      location_data:locationValues
     
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
  const useStyles = makeStyles((theme) => ({
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },

  }));


  //React state variable
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState({
    park: [false, false, false],
    restaurant: [false, false, false],
    rv_park: [false, false, false],
    tourist_attraction: [false, false, false],
  });

  const handleExpandClick = (index, key) => {
    // console.log("index", index, key);
    // console.log("expanded", expanded);

    const currentValues = expanded[key];
    currentValues[index] = !currentValues[index];
    setExpanded({ ...expanded, [key]: currentValues });
  };

  return (
    <Container className={"-results-card-body "}>
      <Row className={"-title-row"}>
        {!results.length ? (
          <h1>Search for a Location</h1>
        ) : (
          // <h1> {results.length} We found your new destination! </h1>
          <h1> We found your new destination! </h1>
        )}
      </Row>
      <Row className={"-results-row container-fluid"}>
        {results.map((locations, index) => (
          <Col
            size={"md-12 location-main-results-container"}
            key={`col-1-${index}`}
          >
            <Col size={"md-2 location-primary-results"} key={`col-2-${index}`}>
              <Col key={index} size="md-2">
                <div
                  className="card"
                  style={{ width: "30rem", margin: "10px" }}
                >
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
                      <Col size={"md-8"} key={`col-4-${index}`}>
                        <h5 className="card-title">{locations.cityName}</h5>
                      </Col>
                      <Col size={"md-4 rating-col"} key={`col-5-${index}`}>
                        <h5 className="card-text city-rating-title">Rating </h5>
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
                      <Col size={"md-6 card-links"} key={`col-6-${index}`}>
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
                      <Col size={"md-6"} key={`col-7-${index}`}>
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
            </Col>
            <Row className={"-perks"}>
              <Col size={"md-2 location-perks"}>
                <ul className="list-group list-group-flush">
                  {/* <li className="list-group-item cit-coordinates">
                  Lat: {locations.coords.lat} <br />
                  Long: {locations.coords.lon}
                </li> */}
                {/* Park Results*/}
                  <h2>Park Name</h2>
                  {locations.park.map((park, index) => {
                    return (
                      <Card key={`park-index-${index}`}>
                        {park.name}
                        <img src={park.icon}></img>
                        <CardActions disableSpacing>
                          <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                          </IconButton>
                          <IconButton
                            className={clsx(classes.expand, {
                              [classes.expandOpen]: expanded.park[index],
                            })}
                            onClick={() => handleExpandClick(index, "park")}
                            aria-expanded={expanded.park[index]}
                            aria-label="show more"
                          >
                            <ExpandMoreIcon />
                          </IconButton>
                        </CardActions>

                        <Collapse
                          in={expanded.park[index]}
                          timeout="auto"
                          unmountOnExit
                        >
                          <CardContent>
                            <ul>
                              <li key={`park-vicinity ${index}`}>
                                {park.vicinity}
                              </li>
                              <li key={`park-rating ${index}`}>
                                {park.rating}
                              </li>
                            </ul>
                          </CardContent>
                        </Collapse>
                      </Card>
                    );
                  })}
                  {/* Restaurant Results*/}
                  <h2>Restaurants</h2>
                  {locations.restaurant.map((restaurant, index) => {
                    return (
                      <Card key={`restaurant-index-${index}`}>
                        {restaurant.name}
                        <img src={restaurant.icon}></img>
                        <CardActions disableSpacing>
                          <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                          </IconButton>
                          <IconButton
                            className={clsx(classes.expand, {
                              [classes.expandOpen]: expanded.restaurant[index],
                            })}
                            onClick={() =>
                              handleExpandClick(index, "restaurant")
                            }
                            aria-expanded={expanded.restaurant[index]}
                            aria-label="show more"
                          >
                            <ExpandMoreIcon />
                          </IconButton>
                        </CardActions>
                        <Collapse
                          in={expanded.restaurant[index]}
                          timeout="auto"
                          unmountOnExit
                        >
                          <CardContent>
                            <ul>
                              <li key={`restaurant-vicinity ${index}`}>
                                {restaurant.vicinity}
                              </li>
                              <li key={`restaurant-rating ${index}`}>
                                {restaurant.rating}
                              </li>
                            </ul>
                          </CardContent>
                        </Collapse>
                      </Card>
                    );
                  })}
                  {/* RV Parks Results*/}
                  <h2>RV Parks</h2>
                  {locations.rv_park.map((rv_park, index) => {
                    return (
                      <Card key={`rv_park-${index}`}>
                        {rv_park.name}
                        <img src={rv_park.icon}></img>
                        <CardActions disableSpacing>
                          <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                          </IconButton>
                          <IconButton
                            className={clsx(classes.expand, {
                              [classes.expandOpen]: expanded.rv_park[index],
                            })}
                            onClick={() => handleExpandClick(index, "rv_park")}
                            aria-expanded={expanded.rv_park[index]}
                            aria-label="show more"
                          >
                            <ExpandMoreIcon />
                          </IconButton>
                        </CardActions>

                        <Collapse
                          in={expanded.rv_park[index]}
                          timeout="auto"
                          unmountOnExit
                        >
                          <CardContent>
                            <ul>
                              <li key={`rv_park-vicinity ${index}`}>
                                {rv_park.vicinity}
                              </li>
                              <li key={`rv_park-rating ${index}`}>
                                {rv_park.rating}
                              </li>
                            </ul>
                          </CardContent>
                        </Collapse>
                      </Card>
                    );
                  })}
                  {/* Tourist Attraction Results*/}
                  <h2>Tourist Attractions</h2>
                  {locations.tourist_attraction.map(
                    (tourist_attraction, index) => {
                      return (
                        <Card key={`tourist_attraction-${index}`}>
                          {tourist_attraction.name}
                          <img src={tourist_attraction.icon}></img>
                          <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                              <FavoriteIcon />
                            </IconButton>
                            <IconButton
                              className={clsx(classes.expand, {
                                [classes.expandOpen]:
                                  expanded.tourist_attraction[index],
                              })}
                              onClick={() =>
                                handleExpandClick(index, "tourist_attraction")
                              }
                              aria-expanded={expanded.tourist_attraction[index]}
                              aria-label="show more"
                            >
                              <ExpandMoreIcon />
                            </IconButton>
                          </CardActions>

                          <Collapse
                            in={expanded.tourist_attraction[index]}
                            timeout="auto"
                            unmountOnExit
                          >
                            <CardContent>
                              <ul>
                                <li
                                  key={`tourist_attraction-vicinity ${index}`}
                                >
                                  {" "}
                                  {tourist_attraction.vicinity}
                                </li>
                                <li key={`tourist_attraction-rating ${index}`}>
                                  {tourist_attraction.rating}
                                </li>
                              </ul>
                            </CardContent>
                          </Collapse>
                        </Card>
                      );
                    }
                  )}
                </ul>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default LocationCard;
