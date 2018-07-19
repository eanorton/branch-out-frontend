import React, { Component } from 'react';
import Searchbar from '../components/Searchbar';
import Artists from '../components/Artists';
import querystring from 'query-string';
import { withRouter } from 'react-router-dom';


class SuccessContainer extends Component {

  state = {
    searchterm: "",
    searchedArtist: "",
    recommendedArtists: null,
    selectedArtist: null,
    currentUser: ""
  }

  // Sets the search term in state

  handleChange = (event) => {
    this.setState({searchterm: event.target.value})
  }

  // Fetches once a user clicks on one of the recommended artists and appends

  handleClick = (artist) => {
    this.setState({selectedArtist: artist}, ()=>{
      console.log("artist id", this.state.selectedArtist.id)
      fetch(`http://localhost:4000/api/v1/get-more-artists/${this.state.selectedArtist.id}/${this.state.currentUser}`)
      .then(response=>response.json())
      .then(data=>{
        let newData = data.recommended_artists.artists.slice(0,3);
        let newRecommendedArtistsArray = [...this.state.recommendedArtists, newData]
        this.setState({recommendedArtists: newRecommendedArtistsArray })
      }
    )})
  }

  // Fetches artists based on initial search by user

  fetchArtist = (event) => {
    event.preventDefault()
    fetch(`http://localhost:4000/api/v1/search-artists/${this.state.searchterm}/${this.state.currentUser}`)
    .then(response=>response.json())
    .then(data=>this.setState({
      searchedArtist: data.searched_artist.artists,
      recommendedArtists: [data.recommended_artists.artists.slice(0,3)]
    }))
  }


  // Setting the user on mount based on the username getting passed through the URL

  componentDidMount(){
    this.setState({currentUser: this.props.location.pathname.split("/")[2]})
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

export default withRouter(SuccessContainer);
