import React, { Component } from 'react';
import Searchbar from '../components/Searchbar';
import Artists from '../components/Artists';

class SuccessContainer extends Component {

  state = {
    searchterm: ""
  }

  handleChange = (event) => {
    this.setState({searchterm: event.target.value})
  }

  fetchArtist = () => {
    
  }

  render() {
    return (
      <div>
        <h1>You've Logged In!</h1>
        <h2>Now you can search for artists to get recommendations</h2>
        <Searchbar term={this.state.searchterm} handleChange={this.handleChange} />
        <Artists />
      </div>
    )
  }

}

export default SuccessContainer;
