import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Carousel, Accordion, Button, Alert, Breadcrumb, Card, Form, Row, Col, InputGroup, FormControl} from 'react-bootstrap'
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Media from "react-bootstrap/Media";

function App() {
  return (
    <div className="App">

          <Jumbotron>
              <h1>Hello, world!</h1>
              <p>
                  This is a simple hero unit, a simple jumbotron-style component for calling
                  extra attention to featured content or information.
              </p>

<Container>
    <Row>
        <Col></Col>
        <Col xs={6}>
            <Form >
                <Form.Label htmlFor="inlineFormInputName2" srOnly>
                    Name
                </Form.Label>
                <Form.Control
                    className="mb-2 mr-sm-2"
                    id="inlineFormInputName2"
                    placeholder="Jane Doe"
                />
                <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
                    Username
                </Form.Label>
                <InputGroup className="mb-2 mr-sm-2">
                    <InputGroup.Prepend>
                        <InputGroup.Text>@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl id="inlineFormInputGroupUsername2" placeholder="Username" />
                </InputGroup>

                <Button type="submit" className="mb-2">
                    Submit
                </Button>
            </Form>

            </Col>
        <Col></Col>


        </Row>
    </Container>
          </Jumbotron>
       








    </div>
  );
}

export default App;
