import React, { Component } from 'react';
import anime from 'animejs';

class ArtistRecs extends Component {

  render() {

    return (
      <div onClick={()=>{this.props.handleClick(this.props.artist)}}>
        <p style={{fontWeight: "bold"}}>{this.props.artist.name}</p>
      </div>
    )
  }
}

export default ArtistRecs;
