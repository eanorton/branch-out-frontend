import React from 'react';
import anime from 'animejs';

const ArtistRecs = (props) => {

  let artistName = props.artist.name
  let artistId = props.artist.id

  let filteredArtists = props.artistTopTracks.filter(trackObj=>trackObj[0].artists[0].name === artistName)[0];

  return (

    <div>

      <h3 onClick={()=>{props.handleClick(props.artist)}}>{props.artist.name}</h3>

      {/*<img src={props.artist.images[0].url} width="200" height="200" /> */}

      {filteredArtists.map(t=><iframe
        src={`https://open.spotify.com/embed?uri=${t.uri}`}
        key={t.id}
        style={{padding: '10px'}}
        width="300"
        height="100"
        frameBorder="0.25"
        allowtransparency="true"
        allow="encrypted-media"></iframe>)}

      {/*props.artistTopTracks.map(t=><audio key={t.id} src={t.preview_url} controls="play"> {t.name} </audio>)*/}

    </div>
  )
}

export default ArtistRecs;

{/*  */}
