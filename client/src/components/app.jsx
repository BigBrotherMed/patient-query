import React, { Component } from 'react';
import Query from '../containers/query.jsx';
import PatientList from '../containers/patientList.jsx';
import PatientDetailsMasterContainer from '../containers/PatientDetailsMasterContainer.jsx';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import { Row, Col, PageHeader, Well } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand><a href="/">Big Brother Medical</a></Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>       
       	 	<Grid>	 		
				    <Row>
				      <Col sm={6}>
				      	<Well>
                  <Well>
                    <Row>
                      <Col sm={1}></Col>
                      <Col sm={11}>
                        <PageHeader><small>Patient List</small></PageHeader>
                      </Col>
                    </Row>
                  </Well>
					      	<Well><Query /></Well>
                  <Well><PatientList /></Well>
					      </Well>           
				      </Col>
				      <Col sm={6}>
				      	<Well>
                  <Well>
                    <Row>
                      <Col sm={1}></Col>
                      <Col sm={11}>
                        <PageHeader><small>Patient Details</small></PageHeader>
                      </Col>
                    </Row>
                  </Well>
                  <PatientDetailsMasterContainer />
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