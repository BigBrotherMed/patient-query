import React, { Component } from 'react';
import Query from '../containers/query.jsx';
import PatientList from '../containers/patientList.jsx';
import PatientDetailsMasterContainer from '../containers/PatientDetailsMasterContainer.jsx';
import Login from '../containers/login.jsx';
import { Grid, Navbar, Nav, NavItem, Jumbotron, Button, Row, Col, PageHeader, Well, Label } from 'react-bootstrap';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    }
    this.checkCredentials = this.checkCredentials.bind(this);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.setState({
      loggedIn: false
    })
  }

  checkCredentials(credentials) {
    if (credentials.action === 'login') {
      axios.get('/credentials', {
        params: {
          credentials: credentials
        }
      })
      .then(res => {
        this.setState({
          loggedIn: true
        })
      })
      .catch(err => {
        console.error(err.response.status);
      })

    } else {
      axios.post('/credentials', {
        credentials: credentials
      })
      .then(res => {
        this.setState({
          loggedIn: true
        })
      })
      .catch(err => {
        const errCode = err.response.status;

        if (errCode === 422) {
          console.error('username already exists');
        }

        if (errCode === 412) {
          console.error('incorrect secret word');
        }
      });
    }
  }
  
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
    
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Big Brother Medical</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem href="#" onClick={this.logout}>Logout</NavItem>
            </Nav>
          </Navbar.Collapse>
      
        </Navbar>

        {!this.state.loggedIn ?
          <Jumbotron>
            <Well>
              <Grid>
                <Row>
                  <Col sm={4}></Col>
                  <Col sm={4}>
                    <Login checkCredentials={this.checkCredentials}/>
                  </Col>
                  <Col sm={4}></Col>
                </Row>
              </Grid>
            </Well>
          </Jumbotron>       
        :
          <Jumbotron>       
            <Grid>	 		
              <Row>
                <Col sm={5}>
                  <Well>
                    <Well>
                      <Row>
                        <Col sm={1}></Col>
                        <Col sm={11}>
                          <h2><Label bsStyle="primary">Patient List</Label></h2>
                        </Col>
                      </Row>
                    </Well>
                    <Well><Query /></Well>
                    <Well><PatientList /></Well>
                  </Well>           
                </Col>
                <Col sm={7}>
                  <Well>
                    <Well>
                      <Row>
                        <Col sm={1}></Col>
                        <Col sm={11}>
                          <h2><Label bsStyle="primary">Patient Details</Label></h2>
                        </Col>
                      </Row>
                    </Well>
                    <PatientDetailsMasterContainer />
                  </Well>
                </Col>		      
              </Row>				    
            </Grid>
          </Jumbotron>
        }
      </div>
    );
  }
}

export default App;