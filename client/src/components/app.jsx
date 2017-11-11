import React, { Component } from 'react';
import Query from '../containers/query.jsx';
import PatientList from '../containers/patientList.jsx';
import PatientDetails from '../containers/patientDetails.jsx';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import { Row, Col, PageHeader, Well } from 'react-bootstrap';

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
				      <Col sm={5}>
				      	<Well>
				      		<PageHeader><small>Patient List</small></PageHeader>
					      	<Well><Row><Query /></Row></Well>
					      	<Row><PatientList /></Row>
					      </Well>
				      </Col>
				      <Col sm={7}>
				      	<Well>
					      	<PageHeader><small>Patient Details</small></PageHeader>
					      	<Row><PatientDetails /></Row>
					      </Well>
				      </Col>		      
				    </Row>
				    
				  </Grid>
				</Jumbotron>
      </div>
    );
  }
}

export default App;