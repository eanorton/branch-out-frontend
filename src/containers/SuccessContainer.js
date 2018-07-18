import React, { Component } from 'react';
import Searchbar from '../components/Searchbar';
import Artists from '../components/Artists';

class SuccessContainer extends Component {

  state = {
    searchterm: "",
    searchedArtist: "",
    recommendedArtists: null,
    selectedArtist: null
  }

  handleChange = (event) => {
    this.setState({searchterm: event.target.value})
  }

  handleClick = (artist) => {
    console.log(artist)
  }

  fetchArtist = (event) => {
    event.preventDefault()
    fetch(`http://localhost:4000/api/v1/search-artists/${this.state.searchterm}`)
    .then(response=>response.json())
    .then(data=>this.setState({
      searchedArtist: data.searched_artist.artists,
      recommendedArtists: data.recommended_artists.artists
    }, ()=>console.log("this is the state", this.state)))
  }

  render() {
    return (
      <div>
        <h1>You've Logged In!</h1>
        <h2>Now you can search for artists to get recommendations</h2>
        <Searchbar onSubmit={this.fetchArtist} term={this.state.searchterm} handleChange={this.handleChange} />
        {this.state.recommendedArtists ? <Artists handleClick={this.handleClick} artist={this.state.searchedArtist} recommendedArtists={this.state.recommendedArtists}/> : null}
      </div>
    )
  }

}

export default SuccessContainer;
