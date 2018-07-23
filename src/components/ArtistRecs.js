import React from 'react';
import anime from 'animejs';

const ArtistRecs = (props) => {

  return (

    <div>
      <img src={props.artist.images[0].url} width="200" height="200" />

      <p style={{fontWeight: "bold"}} onClick={()=>{props.handleClick(props.artist)}}>{props.artist.name}</p>

      {props.artistTopTracks.map(t=><audio key={t.id} src={t.preview_url} controls="play"> {t.name} </audio>)}
    </div>
  )
}

export default ArtistRecs;
