import React, { Component } from "react";
import Searchbar from "../components/Searchbar";
import Artists from "../components/Artists";
import querystring from "query-string";
import { withRouter } from "react-router-dom";
import TweenMax from "gsap/TweenMax";
import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from "gsap/all";
import anime from "animejs";
import { Button } from 'semantic-ui-react';


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
  };

  // Fetches once a user clicks on one of the recommended artists and appends

  handleClick = (artist) => {
    this.setState({selectedArtist: artist}, ()=>{
      fetch(`http://localhost:4000/api/v1/get-more-artists/${this.state.selectedArtist.id}/${this.state.currentUser}`)
      .then(response=>response.json())
      .then(data=>{
        let newArtists = data.recommended_artists.artists.slice(0,3);
        let newRecommendedArtistsArray = [...this.state.recommendedArtists, newArtists];

        let newArtist1Recs = data.rec1_artist_tracks.tracks.slice(0,3);
        let newArtist2Recs = data.rec2_artist_tracks.tracks.slice(0,3);
        let newArtist3Recs = data.rec3_artist_tracks.tracks.slice(0,3);

        let newArtist1TrackArray = [...this.state.rec1ArtistTopTracks, newArtist1Recs];
        let newArtist2TrackArray = [...this.state.rec2ArtistTopTracks, newArtist2Recs];
        let newArtist3TrackArray = [...this.state.rec3ArtistTopTracks, newArtist3Recs];

        this.setState({
          recommendedArtists: newRecommendedArtistsArray,
          rec1ArtistTopTracks: newArtist1TrackArray,
          rec2ArtistTopTracks: newArtist2TrackArray,
          rec3ArtistTopTracks: newArtist3TrackArray
        })
      }
    )})
  };

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
        rec1ArtistTopTracks: [data.rec1_artist_tracks.tracks.slice(0,3)],
        rec2ArtistTopTracks: [data.rec2_artist_tracks.tracks.slice(0,3)],
        rec3ArtistTopTracks: [data.rec3_artist_tracks.tracks.slice(0,3)]
      }))
    }
  };


  // Setting the user on mount based on the username getting passed through the URL

  componentDidMount(){
    this.setState({currentUser: this.props.location.pathname.split("/")[2]})
  };

  render() {

    return (
      <React.Fragment>

        <div>
          <h4 style={{letterSpacing: "1px", fontFamily: 'Raleway'}}>Search by your favorite Artists/Musicians to get recommendations!</h4>

          <Searchbar onSubmit={this.fetchArtist} term={this.state.searchterm} handleChange={this.handleChange} />

          {this.state.recommendedArtists ? <Artists handleClick={this.handleClick} artist={this.state.searchedArtist} recommendedArtists={this.state.recommendedArtists} searchedArtistTopTracks={this.state.searchedArtistTopTracks} rec1ArtistTopTracks={this.state.rec1ArtistTopTracks} rec2ArtistTopTracks={this.state.rec2ArtistTopTracks} rec3ArtistTopTracks={this.state.rec3ArtistTopTracks}/> : null}
        </div>
    </React.Fragment>
    )
  };

}

export default withRouter(SuccessContainer);

{/*        <form>
          <Button color="black" style={{borderRadius: "20px"}} type="submit" formAction={`http://localhost:4000/api/v1/${this.state.currentUser}/logout`}>LOGOUT</Button>
        </form>    */}
