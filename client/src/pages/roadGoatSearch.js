import React, { useState, useEffect, setState } from "react";
import { Row, Col, Container, CenteredContainer } from "../components/Grid";
import { Input, FormBtn } from "../components/FormBtn";
import SearchGoat from "../utils/SearchLocation";
import LocationCard from "../components/LocationCard";

function GetGoat() {
  const [searchInput, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const HandleInput = (e) => {
    e.preventDefault();
    return setSearch(e.target.value);
  };

  const HandleClick = async (e, searchInput) => {
    e.preventDefault();
    SearchGoat(searchInput).then((res) => {
      setResults(res.data.data);
      console.log(res.data);
    });
  };

  return (
    <Container className={"-main-body"}>
      <Container className={"-search-bar"}>
        <Row className={"-search"}>
          <Col size="md-4">
            <form>
              <Input
                onChange={HandleInput}
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
        <LocationCard data={results}></LocationCard>
      </Container>
    </Container>
  );
}

export default GetGoat;

{
  /* <div className="bd-example">
<div className="input-group mb-3">
  <input
    value={searchInput}
    onChange={HandleInput}
    name="input"
    type="text"
    className="form-control"
    placeholder="Search for a location"
    aria-label="Username"
    aria-describedby="basic-addon1"
  ></input>
</div>
</div> */
}
