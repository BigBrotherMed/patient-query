import React, { Component } from 'react';
import Query from '../containers/query.jsx';
import PatientList from '../containers/patientList.jsx';
import PatientDetails from '../containers/patientDetails.jsx';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Big Brother Medical</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>       
       	 	<Grid>
				    <Row>
				      <Col sm={4}>
				      	<Row><PatientList /></Row>
				      	<Row><Query /></Row>
				      </Col>
				      <Col sm={1}></Col>
				      <Col sm={7}>
				      	<Row><PatientDetails /></Row>
				      </Col>			      
				    </Row>
				  </Grid>
				</Jumbotron>
      </div>
    );
  }
}

export default App;