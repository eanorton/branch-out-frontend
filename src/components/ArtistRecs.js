import React from 'react';
import anime from 'animejs';

const ArtistRecs = (props) => {
  return (
    <div>
      <img src={props.artist.images[2].url} width={props.artist.images[2].width} height={props.artist.images[2].height} />
      <p style={{fontWeight: "bold"}} onClick={()=>{props.handleClick(props.artist)}}>{props.artist.name}</p>
      {props.artistTopTracks.map(t=><audio src={t.preview_url} controls="play">{t.name}</audio>)}
    </div>
  )
}

export default ArtistRecs;
