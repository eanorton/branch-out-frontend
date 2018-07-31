import React from "react";
import { Button } from "semantic-ui-react";

const Playlist = (props) => {

  return (

    <div>
      {props.playlist ? <iframe
        src={`https://open.spotify.com/embed?uri=${props.playlist.uri}`}
        className="playlist-frame"
        title={props.playlist.name}
        style={{padding: "10px"}}
        width="300"
        height="380"
        frameBorder="0.25"
        allowtransparency="true"
        allow="encrypted-media">
      </iframe> :
      <Button className="playlist"
        color="green"
        style={{fontFamily: "Raleway, sans-serif", borderRadius: "4px"}}
        onClick={()=>props.createPlaylistClick()}>CREATE PLAYLIST
      </Button>}
    </div>
  )
};

export default Playlist;
