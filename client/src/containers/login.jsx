import React from 'react';

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

    if (this.state.password === this.state.verifyPassword && this.state.secret !== '') {
      this.props.checkCredentials(credentials);
    } else {
      //TODO: error message for passwords not matching
      if (this.state.password !== this.state.verifyPassword) {
        console.log('passwords don\'t match!');
      }

      //TODO: error message for empty secret field
      if (this.state.secret === '') {
        console.log('secret is empty');
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
        <div>
          <h2>Log in</h2>
          <p>Username</p>
          <input value={this.state.username} onChange={this.usernameChange} />
          <p>Password</p>
          <input value={this.state.password} onChange={this.passwordChange} />
          <button type="button" onClick={this.onSubmit}>Log in</button>
          <hr/>
          <button type="button" onClick={this.toggleLoginAndSignUp}>Create new account</button>
        </div>
      );

    if (this.state.page === 'signup')
      return (
        <div>
          <h2>Create a new account</h2>
          <p>Username</p>
          <input value={this.state.username} onChange={this.usernameChange} />
          <p>Password</p>
          <input value={this.state.password} onChange={this.passwordChange} />
          <p>Verify password</p>
          <input value={this.state.verifyPassword} onChange={this.verifyPasswordChange} />
          <p>Secret word</p>
          <input value={this.state.secret} onChange={this.secretChange} />
          <button type="button" onClick={this.onSubmit}>Create new account</button>
          <hr/>
          <button type="button" onClick={this.toggleLoginAndSignUp}>Log in</button>
        </div>
      );
  }
}

export default Login;