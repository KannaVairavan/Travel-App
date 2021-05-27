import React, { useState, useEffect, setState } from "react";
import Container from "../components/Container";
import SearchBtn from "../components/SearchBtn";
import SearchGoat from "../utils/SearchLocation";

function GetGoat() {
  const [searchInput, setSearch] = useState("");
  const [results, setResults] = useState([])

  const HandleInput = (e) => {
    console.log(e.target.value);
    return setSearch(e.target.value);
  };

  const HandleClick = async (searchInput) => {
    await SearchGoat(searchInput).then((res) => console.log(res));
  };

  return (
    <Container style={{ margin: 15 }}>
      <div className="bd-example">
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
      </div>
      <SearchBtn
        input={searchInput}
        onClick={() => {
          HandleClick(searchInput);
        }}
        flavor={"dark"}
        style={{ textAlign: "center" }}
      >
        Get the Goat
      </SearchBtn>
    </Container>
  );
}

export default GetGoat;
