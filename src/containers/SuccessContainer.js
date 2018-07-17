import React, { Component } from 'react';
import Searchbar from '../components/Searchbar';
import Artists from '../components/Artists';

class SuccessContainer extends Component {

  state = {
    searchterm: "",
    searched_artist: "",
    recommended_artists: []
  }

  handleChange = (event) => {
    this.setState({searchterm: event.target.value})
  }

  fetchArtist = (event) => {
    event.preventDefault()
    fetch(`http://localhost:4000/api/v1/search-artists/${this.state.searchterm}`)
    .then(response=>response.json())
    .then(data=>this.setState({
      searched_artist: data.searched_artist.artists,
      recommended_artists: data.recommended_artists.artists
    }, ()=>console.log("this is the state", this.state)))
  }

  render() {
    return (
      <div>
        <h1>You've Logged In!</h1>
        <h2>Now you can search for artists to get recommendations</h2>
        <Searchbar onSubmit={this.fetchArtist} term={this.state.searchterm} handleChange={this.handleChange} />
        <Artists />
      </div>
    )
  }

}

export default SuccessContainer;
