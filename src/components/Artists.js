import React, { Component } from 'react';
import ArtistRecs from './ArtistRecs';
import anime from 'animejs';

class Artists extends Component {

  render() {

    console.log("edward", this.props.artist.items[0].images[2])

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
        <img src={this.props.artist.items[0].images[2].url} width={this.props.artist.items[0].images[2].width} height={this.props.artist.items[0].images[2].height}/>
        <h3>Results for {searchedArtistName}</h3>
        {this.props.searchedArtistTopTracks.map(t=><audio src={t.preview_url} controls="play">{t.name}</audio>)}
        {recommendedArtists}
      </React.Fragment>
    )
  }

}

export default Artists;
