import React, {Component} from "react";
import { Icon } from "semantic-ui-react";

class ArtistFrame extends Component {

  state = {

  }

  handleClick = (trackObj) => {
    fetch(`http://localhost:4000/api/v1/add-track-to-playlist/${this.props.currentUser}/${trackObj.uri}/${this.props.playlist.uri}`)
    .then(response=>response.json())
    .then(
      setTimeout(function(){document.querySelector('.playlist-frame').src = document.querySelector('.playlist-frame').src;}, 31000)
    )
  }


  render() {

    //let artistId = this.props.artist.map(artist=>artist.artists[0].id)
    let artistName = this.props.artist.map(artist=>artist.artists[0].name)
    let artistObj = this.props.artist.map(artist=>artist.artists[0])

    return (
      <div>

        <h1 className="artist-rec-name" style={{fontFamily: 'Raleway, sans-serif', letterSpacing: "2px"}} onClick={()=>{this.props.handleClick(artistObj[0])}}> {artistName.slice(0,1)} </h1>

        {this.props.artist.map(t=>
          <React.Fragment>
          <iframe
            src={`https://open.spotify.com/embed?uri=${t.uri}`}
            title={t.name}
            key={t.id}
            style={{padding: "10px"}}
            width="300"
            height="100"
            frameBorder="0.25"
            allowtransparency="true"
            allow="encrypted-media">
          </iframe>
          <Icon onClick={()=>this.handleClick(t)} className="add-track" name="plus"/>
        </React.Fragment>
        )}
      </div>
    )
  }
};

export default ArtistFrame;
