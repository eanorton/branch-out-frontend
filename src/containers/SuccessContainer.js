import React, { Component } from "react";
import Searchbar from "../components/Searchbar";
import Artists from "../components/Artists";
import querystring from "query-string";
import { withRouter } from "react-router-dom";
import TweenMax from "gsap/TweenMax";
import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from "gsap/all";
import anime from "animejs";


class SuccessContainer extends Component {

  state = {
    searchterm: "",
    searchedArtist: "",
    recommendedArtists: null,
    selectedArtist: null,
    currentUser: "",
    searchedArtistTopTracks: null,
    rec1ArtistTopTracks: null,
    rec2ArtistTopTracks: null,
    rec3ArtistTopTracks: null
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
        this.setState({
          recommendedArtists: newRecommendedArtistsArray,
          rec1ArtistTopTracks: data.rec1_artist_tracks.tracks.slice(0,3),
          rec2ArtistTopTracks: data.rec2_artist_tracks.tracks.slice(0,3),
          rec3ArtistTopTracks: data.rec3_artist_tracks.tracks.slice(0,3)
        })
      }
    )})
  }

  // Fetches artists based on initial search by user

  fetchArtist = (event) => {
    event.preventDefault()
    if (this.state.searchterm !== "") {
      fetch(`http://localhost:4000/api/v1/search-artists/${this.state.searchterm}/${this.state.currentUser}`)
      .then(response=>response.json())
      .then(data=> this.setState({
        searchedArtist: data.searched_artist.artists,
        recommendedArtists: [data.recommended_artists.artists.slice(0,3)],
        searchedArtistTopTracks: data.searched_artist_tracks.tracks.slice(0,3),
        rec1ArtistTopTracks: data.rec1_artist_tracks.tracks.slice(0,3),
        rec2ArtistTopTracks: data.rec2_artist_tracks.tracks.slice(0,3),
        rec3ArtistTopTracks: data.rec3_artist_tracks.tracks.slice(0,3)
      }, ()=> {console.log("this is the state from search fetch", this.state)}))
    }
  }


  // Setting the user on mount based on the username getting passed through the URL

  componentDidMount(){
    this.setState({currentUser: this.props.location.pathname.split("/")[2]})
  }

  render() {
    return (
      <div>
        <h3>{this.state.currentUser}</h3>

        <h4>Search by your favorite Artists/Musicians to get recommendations!</h4>


        <Searchbar onSubmit={this.fetchArtist} term={this.state.searchterm} handleChange={this.handleChange} />

      <br></br>

        {this.state.recommendedArtists ? <Artists handleClick={this.handleClick} artist={this.state.searchedArtist} recommendedArtists={this.state.recommendedArtists} searchedArtistTopTracks={this.state.searchedArtistTopTracks} rec1ArtistTopTracks={this.state.rec1ArtistTopTracks} rec2ArtistTopTracks={this.state.rec2ArtistTopTracks} rec3ArtistTopTracks={this.state.rec3ArtistTopTracks}/> : null}
      </div>
    )
  }

}

export default withRouter(SuccessContainer);
