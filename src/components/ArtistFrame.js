import React from "react";

const ArtistFrame = (props) => {

  let artistId = props.artist.map(artist=>artist.artists[0].id)
  let artistName = props.artist.map(artist=>artist.artists[0].name)
  let artistObj = props.artist.map(artist=>artist.artists[0])

  console.log(artistObj.slice(0,1));
  console.log(artistId.slice(0,1));
  console.log(artistName.slice(0,1));

  return (
    <div>
      <h1 className="artist-rec-name" style={{fontFamily: 'Raleway, sans-serif'}} onClick={()=>{props.handleClick(artistObj[0])}}>{artistName.slice(0,1)}</h1>
        {props.artist.map(t=><iframe
          src={`https://open.spotify.com/embed?uri=${t.uri}`}
          title={t.name}
          key={t.id}
          style={{padding: "10px"}}
          width="300"
          height="100"
          frameBorder="0.25"
          allowtransparency="true"
          allow="encrypted-media"></iframe>)}
    </div>
  )
}

export default ArtistFrame;
