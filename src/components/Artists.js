import React, { Component } from 'react';
import ArtistRecs from './ArtistRecs';

class Artists extends Component {

  render() {

    let searchedArtistName = this.props.artist.items[0].name

    let recommendedArtists = this.props.recommendedArtists.slice(0,3).map(artist=><ArtistRecs
      key={artist.id}
      artist={artist}
      handleClick={this.props.handleClick}
      />)

    return (
      <React.Fragment>
        <h3>Results for {searchedArtistName}</h3>
        {recommendedArtists}
      </React.Fragment>
    )
  }

}

export default Artists;
