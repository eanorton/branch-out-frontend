import React from 'react';
import anime from 'animejs';

const ArtistRecs = (props) => {

  console.log(props.artist.images)

  return (

    <div className="unitlessValue">
      <img src={props.artist.images[1].url} width="250" height="250" />

      <p style={{fontWeight: "bold"}} onClick={()=>{props.handleClick(props.artist)}}>{props.artist.name}</p>

      {props.artistTopTracks.map(t=><audio src={t.preview_url} controls="play"> {t.name} </audio>)}
    </div>
  )
}

export default ArtistRecs;
