import React, { Component } from "react";
import Searchbar from "../components/Searchbar";
import Artists from "../components/Artists";
import Playlist from "../components/Playlist";
import { withRouter } from "react-router-dom";

class SuccessContainer extends Component {

  state = {
    searchterm: "",
    searchedArtist: "",
    recommendedArtists: null,
    selectedArtist: null,
    currentUser: "",
    searchedArtistTopTracks: null,
    allArtists: [],
    iteration: 0
  }

  // Sets the search term in state

  handleChange = (event) => {
    this.setState({searchterm: event.target.value})
  };

  // Fetches once a user clicks on one of the recommended artists and appends

  handleClick = (artist) => {
    if (this.state.iteration < 8) {
      this.setState({selectedArtist: artist, iteration: this.state.iteration + 1}, ()=>{
        fetch(`http://localhost:4000/api/v1/get-more-artists/${this.state.selectedArtist.id}/${this.state.currentUser}`)
        .then(response=>response.json())
        .then(data=>{
          let newArtists = data.recommended_artists.artists.slice(0,3);
          let newRecommendedArtistsArray = [...this.state.recommendedArtists, newArtists];

          let newArtist1Recs = data.rec1_artist_tracks.tracks.slice(0,3);
          newArtists[0].tracks = newArtist1Recs;

          let newArtist2Recs = data.rec2_artist_tracks.tracks.slice(0,3);
          newArtists[1].tracks = newArtist2Recs;

          let newArtist3Recs = data.rec3_artist_tracks.tracks.slice(0,3);
          newArtists[2].tracks = newArtist3Recs;

          let allArtists = this.state.allArtists.slice(0);
          allArtists.push(newArtist1Recs)
          allArtists.push(newArtist2Recs)
          allArtists.push(newArtist3Recs)

          this.setState({
            allArtists: allArtists,
            recommendedArtists: newRecommendedArtistsArray
          })
        })
      })
    }
  }

  // Fetches artists based on initial search by user

  fetchArtist = (event) => {
    event.preventDefault()

    this.setState({
      searchedArtist: "",
      recommendedArtists: null,
      searchedArtistTopTracks: null,
      allArtists: []
    })

    if (this.state.searchterm !== "") {
      fetch(`http://localhost:4000/api/v1/search-artists/${this.state.searchterm}/${this.state.currentUser}`)
      .then(response=>response.json())
      .then(data=> {
        let newArtists = data.recommended_artists.artists.slice(0,3);

        let newArtist1Recs = data.rec1_artist_tracks.tracks.slice(0,3);
        newArtists[0].tracks = newArtist1Recs;

        let newArtist2Recs = data.rec2_artist_tracks.tracks.slice(0,3);
        newArtists[1].tracks = newArtist2Recs;

        let newArtist3Recs = data.rec3_artist_tracks.tracks.slice(0,3);
        newArtists[2].tracks = newArtist3Recs;

        let allArtists = this.state.allArtists.slice(0);
        allArtists.push(newArtist1Recs)
        allArtists.push(newArtist2Recs)
        allArtists.push(newArtist3Recs)

        this.setState({
        searchedArtist: data.searched_artist.artists,
        recommendedArtists: [data.recommended_artists.artists.slice(0,3)],
        searchedArtistTopTracks: data.searched_artist_tracks.tracks.slice(0,3),
        allArtists: allArtists
      })
    })
  }};


  // Setting the user on mount based on the username getting passed through the URL

  componentDidMount(){
    this.setState({currentUser: this.props.location.pathname.split("/")[2]})
  };

  render() {

    return (
      <React.Fragment>

        <div>
          <h4 style={{letterSpacing: "2px", fontFamily: 'Raleway'}}>Search by your favorite Artists/Musicians to get recommendations!</h4>

          <Searchbar handleSubmit={this.fetchArtist} term={this.state.searchterm} handleChange={this.handleChange} />

          {this.state.recommendedArtists ? <Artists handleClick={this.handleClick} artist={this.state.searchedArtist} recommendedArtists={this.state.recommendedArtists} searchedArtistTopTracks={this.state.searchedArtistTopTracks} allArtists={this.state.allArtists} /> : null}
        </div>

    </React.Fragment>
    )
  };

}

export default withRouter(SuccessContainer);
