import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class Playlist extends Component {

  state = {
    toggle: false
  }

  handleClick = () => {
    this.setState({
      toggle: true
    })
  }

  render() {
    return (
      <div>

      {this.state.toggle === false ? <Button className="playlist" color="green" style={{fontFamily: "Raleway, sans-serif", borderRadius: "4px"}} onClick={()=>this.handleClick()}>CREATE PLAYLIST</Button>
      :
      <iframe
        src="https://open.spotify.com/embed?uri=spotify:user:edwardnorton06:playlist:06moHIR0v7Z1KSiUTgkbK0"
        className="playlist-frame"
        style={{padding: "10px"}}
        width="300"
        height="380"
        frameborder="0.25"
        allowtransparency="true"
        allow="encrypted-media">
      </iframe>}

      </div>
    )}
}

export default Playlist;
