import React from "react";
import anime from "animejs";


const ArtistRecs = (props) => {

  let artistName = props.artist.name
  let artistId = props.artist.id

  // let artistArray = props.artistTopTracks.filter(trackObj=>{
  //   return trackObj[0].artists.filter(artist=>artist.name === artistName)
  // });
  //
  // let filteredArtists = artistArray[artistArray.length -1]

  return (

    <React.Fragment>

    <div>

      <h1 className="artist-rec-name" style={{fontFamily: 'Raleway, sans-serif'}} onClick={()=>{props.handleClick(props.artist)}}>{props.artist.name}</h1>

      {/*<img src={props.artist.images[0].url} width="200" height="200" /> */}

      {filteredArtists.map(t=><iframe
        src={`https://open.spotify.com/embed?uri=${t.uri}`}
        key={t.id}
        style={{padding: "10px"}}
        width="300"
        height="100"
        frameBorder="0.25"
        allowtransparency="true"
        allow="encrypted-media"></iframe>)}

      {/*props.artistTopTracks.map(t=><audio key={t.id} src={t.preview_url} controls="play"> {t.name} </audio>)*/}

    </div>
    </React.Fragment>
  )
}

export default ArtistRecs;

{/*  */}
