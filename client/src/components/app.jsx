import React, { Component } from 'react';
import Query from '../containers/query.jsx';
import PatientList from '../containers/patientList.jsx';
import PatientDetailsMasterContainer from '../containers/PatientDetailsMasterContainer.jsx';
import Login from '../containers/login.jsx';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import { Row, Col, PageHeader, Well, Label } from 'react-bootstrap';
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
      console.log('from app.jsx ', credentials);
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
        console.log('***from axios success', res);
        this.setState({
          loggedIn: true
        })
      })
      .catch(err => {
        console.log('***from axios failure', err.response.status);
        const errCode = err.response.status;

        if (errCode === 422) {
          console.log('username already exists');
        }

        if (errCode === 412) {
          console.log('incorrect secret word');
        }
      });
    }
  }
  
  render() {
    if (!this.state.loggedIn)
    return (
      <div>
        <Login checkCredentials={this.checkCredentials}/>
      </div>
    );


  if (this.state.loggedIn)
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand><a href="/">Big Brother Medical</a></Navbar.Brand>
              <Navbar.Brand><a onClick={this.logout}>Log out</a></Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
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
      </div>
    );
  }
}

export default App;