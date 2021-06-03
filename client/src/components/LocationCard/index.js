import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "../Grid";
import "./style.css";

function LocationCard({ data }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults(data);
    callResults();
  }, [data]);

  async function callResults() {
    console.log("data passed from Search: ", data);
  }
  return (
    <Container className={"-results-card-body"}>
      <Row className={"-title-row"}>
        {!results.length ? (
          <h1>Search for a Location</h1>
        ) : (
          <h1> {data.length} Matching locations!</h1>
        )}
      </Row>

      <Row className={"-results-row row"}>
        {
        data.map((location, index) => (
        <Col key={index} size="md-2">
        <div className="card" style={{width: "18rem", margin: "10px"}}>
        <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{location.attributes.name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
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
          </div>
        </div>
          </Col>
        ))
        }
      </Row>
    </Container>
  );
}

export default LocationCard;
