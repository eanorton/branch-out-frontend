import React, { Component } from "react";
import ArtistRecs from "./ArtistRecs";
import anime from "animejs";
import { Image, Header } from "semantic-ui-react";

class Artists extends Component {

  componentDidUpdate(){
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  };


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

        <Image src={this.props.artist.items[0].images[0].url} size="medium" circular centered style={{padding: "10px"}} />

        <h1 className="artist-name" style={{fontFamily: 'Raleway'}}>{searchedArtistName}</h1>

        {this.props.searchedArtistTopTracks.map(t=>
          <iframe
          src={`https://open.spotify.com/embed?uri=${t.uri}`}
          key={t.id}
          style={{padding: "10px"}}
          width="300"
          height="100"
          frameBorder="0.25"
          allowtransparency="true"
          allow="encrypted-media"></iframe>)}

        {recommendedArtists}

      </React.Fragment>
    )
  }

}

export default Artists;
