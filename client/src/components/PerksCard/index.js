import React, { useState, useEffect } from "react";
import Container from "../Container";
import Card from "@material-ui/core/Card";
import Collapse from "@material-ui/core/Collapse";
import CardActions from "@material-ui/core/CardActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

function PerksCard(props) {
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

  return props.target.map((park, index) => (
    <Container fluid>
      <Card key={`${props.title}-index-${index}`}>
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

        <Collapse in={expanded.park[index]} timeout="auto" unmountOnExit>
          <CardContent>
            <ul>
              <li key={`${props.title}-vicinity ${index}`}>{park.vicinity}</li>
              <li key={`${props.title}-rating ${index}`}>{park.rating}</li>
            </ul>
          </CardContent>
        </Collapse>
      </Card>
    </Container>
  ));
}

export default PerksCard;
