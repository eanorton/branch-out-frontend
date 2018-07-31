import React, { Component } from "react";
import ArtistFrame from "./ArtistFrame";
import Playlist from "./Playlist";
import { Image, Icon } from "semantic-ui-react";

class Artists extends Component {

  state = {
    playlist: null,
  }

  createPlaylistClick = () => {
    fetch(`http://localhost:4000/api/v1/create-playlist/${this.props.currentUser}`)
    .then(response=>response.json())
    .then(data=>
      this.setState({
        playlist: data
      })
    )
  };

  render() {

    let searchedArtistName = this.props.artist.items[0].name

    return (
      <React.Fragment>
        <Image src={this.props.artist.items[0].images[0].url} size="medium" circular centered style={{padding: "10px"}} />

        <h1 className="artist-name" style={{fontFamily: 'Raleway, sans-serif', letterSpacing: "2px"}}>{searchedArtistName}</h1>

        {this.props.searchedArtistTopTracks.map(t=>
          <React.Fragment>
          <iframe
          src={`https://open.spotify.com/embed?uri=${t.uri}`}
          key={t.id}
          title={t.name}
          style={{padding: "10px"}}
          width="300"
          height="100"
          frameBorder="0.25"
          allowtransparency="true"
          allow="encrypted-media">
        </iframe>
        <Icon className="add-track" name="plus"/>
        </React.Fragment>
      )}

          { this.props.allArtists.map(artist=><ArtistFrame handleClick={this.props.handleClick} artist={artist} searchedArtist={searchedArtistName} currentUser={this.props.currentUser} playlist={this.state.playlist} />) }

          <Playlist createPlaylistClick={this.createPlaylistClick} playlist={this.state.playlist} />

      </React.Fragment>
    )
  }

}

export default Artists;
