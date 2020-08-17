import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Button, Alert, Breadcrumb, Card, Form, Row, Col, InputGroup, FormControl} from 'react-bootstrap'



function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Form inline>
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

          <Card className="mb-3" style={{color:"#000", marginBottom:"#000"}}>
          <Card.Img src={"https://picsum.photos/200/100"} />
          <Card.Body>
            <Card.Title>

            </Card.Title>
          <Card.Text>
            Texto de Ejemplo
          </Card.Text>
            <Button variant="primary">Otro botón</Button>
          </Card.Body>
       </Card>
        <Breadcrumb>
          <Breadcrumb.Item>test 1</Breadcrumb.Item>
          <Breadcrumb.Item>test 1</Breadcrumb.Item>
          <Breadcrumb.Item>test 1</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="primary">Otro botón</Alert>
        <Button> Botón</Button>

      </header>
    </div>
  );
}

export default App;
