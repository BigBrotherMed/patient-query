import React from 'react';
import { Grid, Navbar, Jumbotron, Button, Row, Col, PageHeader, Well, Label, FormControl } from 'react-bootstrap';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'login',
      username: '',
      password: '',
      verifyPassword: '',
      secret: ''
    }
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.secretChange = this.secretChange.bind(this);
    this.verifyPasswordChange = this.verifyPasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);  
    this.toggleLoginAndSignUp = this.toggleLoginAndSignUp.bind(this);
  }

  usernameChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  passwordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  verifyPasswordChange(e) {
    this.setState({
      verifyPassword: e.target.value
    });
  }

  secretChange(e) {
    this.setState({
      secret: e.target.value
    });
  }

  onSubmit(e) {
    const credentials = {
      action: this.state.page,
      username: this.state.username,
      password: this.state.password,
      verifyPassword: this.state.verifyPassword,
      secret: this.state.secret
    }
    
    if (credentials.action === 'signup') {
      if (this.state.password === this.state.verifyPassword && this.state.secret !== '') {
        this.props.checkCredentials(credentials);
      } else {
        //TODO: error message for passwords not matching
        if (this.state.password !== this.state.verifyPassword) {
          console.error('passwords don\'t match!');
        }

        //TODO: error message for empty secret field
        if (this.state.secret === '') {
          console.error('secret is empty');
        }
      }
    } else {
      if (this.state.username === '' || this.state.password === '') {
        console.error('please enter both a username and password');
      } else {
        this.props.checkCredentials(credentials);
      }
    }

  }

  toggleLoginAndSignUp(e) {
    if (this.state.page === 'login') {
      this.setState({
        page: 'signup',
        username: '',
        password: '',
        verifyPassword: '',
        secret: ''
      });
    } else {
      this.setState({
        page: 'login',
        username: '',
        password: '',
        verifyPassword: '',
        secret: ''
      })
    }
  }

  render() {
    if (this.state.page === 'login')
      return (
        <Well>
          <Well>
            <h2><Label bsStyle="primary">Log in</Label></h2>
          </Well>
          <Well>
            <FormControl
              type="text"
              value={this.state.username}
              placeholder="User Name"
              onChange={this.usernameChange}
            /> 
            <FormControl
              type="password"
              value={this.state.password}
              placeholder="Password"
              onChange={this.passwordChange}
            />   
          </Well>  
          <Grid>
            <Row>
              <Col sm={1}></Col>
              <Col sm={11}>
                <Button bsStyle="primary" onClick={this.onSubmit}>Log in</Button>
                <Button bsStyle="primary" onClick={this.toggleLoginAndSignUp}>Create New Account</Button>
              </Col>
            </Row>
          </Grid>         
        </Well>
      );

    if (this.state.page === 'signup')
      return (
        <Well>
          <Well>
            <h2><Label bsStyle="primary">Create New Account</Label></h2>
          </Well>
          <Well>
            <FormControl
              type="text"
              value={this.state.username}
              placeholder="Choose a User Name"
              onChange={this.usernameChange}
            />  
            <FormControl
              type="password"
              value={this.state.password}
              placeholder="Choose a Password"
              onChange={this.passwordChange}
            />  
            <FormControl
              type="password"
              value={this.state.verifyPassword}
              placeholder="Retype Password"
              onChange={this.verifyPasswordChange}
            />  
            <FormControl
              type="password"
              value={this.state.secret}
              placeholder="Enter Secret Word"
              onChange={this.secretChange}
            />  
          </Well>
          <Grid>
            <Row>
              <Col sm={1}></Col>
              <Col sm={11}>
                <Button bsStyle="primary" onClick={this.onSubmit}>Create New Account</Button>
                <Button bsStyle="primary" onClick={this.toggleLoginAndSignUp}>Log in</Button>
              </Col>
            </Row>
          </Grid>
        </Well>
      );  
  }
}

export default Login;