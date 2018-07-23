import React, { Component } from 'react';
import ArtistRecs from './ArtistRecs';
import anime from 'animejs';

class Artists extends Component {

  render() {

    let searchedArtistName = this.props.artist.items[0].name

    let artistRecArray = [this.props.rec1ArtistTopTracks, this.props.rec2ArtistTopTracks, this.props.rec3ArtistTopTracks]

    let recommendedArtists = this.props.recommendedArtists.map((array) => array.map((artist, index)=>
      <ArtistRecs
      key={artist.id}
      artist={artist}
      handleClick={this.props.handleClick}
      artistTopTracks={artistRecArray[index]}
      />))

    return (
      <React.Fragment>

        <img src={this.props.artist.items[0].images[0].url} width="200" height="200"/>

        <h3>Recommendations Based On {searchedArtistName}</h3>

        {this.props.searchedArtistTopTracks.map(t=><audio
          key={t.id}
          src={t.preview_url}
          controls="play">{t.name}</audio>)}

        {recommendedArtists}

      </React.Fragment>
    )
  }

}

export default Artists;
