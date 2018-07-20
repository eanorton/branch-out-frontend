import React, { Component } from 'react';
import anime from 'animejs';

class ArtistRecs extends Component {

  render() {

    console.log("hihihihihi", this.props.artistTopTracks)

    return (
      <div>
        <p style={{fontWeight: "bold"}} onClick={()=>{this.props.handleClick(this.props.artist)}}>{this.props.artist.name}</p>
        {this.props.artistTopTracks.map(t=><audio src={t.preview_url} controls="play">{t.name}</audio>)}
      </div>
    )
  }
}

export default ArtistRecs;
