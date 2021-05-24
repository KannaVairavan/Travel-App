import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";

function TravelApp() {

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                
                name="title"
                placeholder="Title (required)"
              />
              <Input
                
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={true}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }


export default TravelApp;
