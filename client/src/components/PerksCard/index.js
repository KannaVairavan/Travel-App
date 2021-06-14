import React, { useState } from "react";
import Container from "../Container";
import { Row, Col } from "../Grid";

import Card from "@material-ui/core/Card";
import Collapse from "@material-ui/core/Collapse";
import CardActions from "@material-ui/core/CardActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import "./style.css"
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import NatureIcon from "@material-ui/icons/Nature";

function PerksCard(props) {

  // const [favorite, setFavorite] = useState(0)

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
    const currentValues = expanded[key];
    currentValues[index] = !currentValues[index];
    setExpanded({ ...expanded, [key]: currentValues });
  };

  return props.target.map((item, index) => (
    <Container fluid key = {`container-${index}`}>

      <Card key={`${props.title}-index-${index}`}>
        <Row className = {'-upper'}>
        {item.name}
        <img src={item.icon} key={`${props.title}-img-${index}`} alt = {`City of ${item.cityName}`}></img>
        </Row>

        <Row className = {'-lower-btn'}>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded[`${props.title}`][index],
            })}
            onClick={() => handleExpandClick(index, `${props.title}`)}
            aria-expanded={expanded[`${props.title}`][index]}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>


        <Collapse in={expanded[`${props.title}`][index]} timeout="auto" unmountOnExit>
          <CardContent key = {`card-content-${index}`}>
            <ul key={`${props.title}-ul-${index}`}>
              <li>{item.vicinity}</li>
              <li>{item.rating}</li>
            </ul>
          </CardContent>
        </Collapse>
        </Row>
      </Card>
    </Container>
  ));
}

export default PerksCard;
