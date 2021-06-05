import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import MapGl from "../components/MapGl";

function TravelApp() {

    return (
      <div>
          <Container fluid>
            <Row>
              <Jumbotron size="md-6">
                Welcome!
              </Jumbotron>
            </Row>
            <MapGl/>
          </Container>
      </div>
    );
  }


export default TravelApp;
