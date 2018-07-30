import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class Playlist extends Component {

  state = {
    toggle: false,
    playlist: "null"
  }

  handleClick = () => {
    this.setState({
      toggle: true,
    }, ()=>{
      fetch(`http://localhost:4000/api/v1/create-playlist/${this.props.currentUser}`)
      .then(response=>response.json())
      .then(data=>
        this.setState({
          playlist: data
        }, ()=>console.log(this.state.playlist))
      )
    })
  };

  render() {
    return (
      <div>

      {this.state.toggle === false ? <Button className="playlist" color="green" style={{fontFamily: "Raleway, sans-serif", borderRadius: "4px"}} onClick={()=>this.handleClick()}>CREATE PLAYLIST</Button>
      :
      <iframe
        src={`https://open.spotify.com/embed?uri=${this.state.playlist.uri}`}
        className="playlist-frame"
        title={this.state.playlist.name}
        style={{padding: "10px"}}
        width="300"
        height="380"
        frameBorder="0.25"
        allowtransparency="true"
        allow="encrypted-media">
      </iframe>}

      </div>
    )}
}

export default Playlist;
