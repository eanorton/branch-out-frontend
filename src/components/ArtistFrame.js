import React from "react";
import { Icon } from "semantic-ui-react";

const ArtistFrame = (props) => {

  //let artistId = props.artist.map(artist=>artist.artists[0].id)
  let artistName = props.artist.map(artist=>artist.artists[0].name)
  let artistObj = props.artist.map(artist=>artist.artists[0])

  return (

    <div>

      <h1 className="artist-rec-name" style={{fontFamily: 'Raleway, sans-serif', letterSpacing: "2px"}} onClick={()=>{props.handleClick(artistObj[0])}}> {artistName.slice(0,1)} </h1>

      {props.artist.map(track=>
        <React.Fragment>
        <iframe
          src={`https://open.spotify.com/embed?uri=${track.uri}`}
          title={track.name}
          key={track.id}
          style={{padding: "10px"}}
          width="300"
          height="100"
          frameBorder="0.25"
          allowtransparency="true"
          allow="encrypted-media">
        </iframe>
        <Icon onClick={()=>props.handleAddTrackClick(track)} className="add-track" name="plus"/>
      </React.Fragment>
      )}
    </div>
  )
};

export default ArtistFrame;
