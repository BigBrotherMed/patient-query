import React from 'react';

class Query extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: ''
    }
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
  }

  handleFirstNameChange(event) {
    this.setState({firstName: event.target.value});
  }
  

  render() {
    return (
      <div>
        <input value={this.state.firstName} onChange={this.handleFirstNameChange} placeholder="First Name" />
        <button> Query </button>



      </div>



    )
  }
}

// const Query = () => (
//   <div>
//     <p>Query component goes here</p>
//   </div>
// );

export default Query;