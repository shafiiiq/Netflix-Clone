import React from 'react'
import '../../cssHelper/helper.css'
import './Trailer.css'
import { useState } from 'react'
import { useEffect } from 'react'
import YouTube from 'react-youtube'


function Trailer(props) {


  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="Trailer z-10 absolute inset w-full flex a-center j-center">
      <div className="trailer-container flex j-center a-center relative">
        <YouTube videoId={props.trailerId} opts={opts} style={{ height: '100%', width: '100%'}} />
      </div>
    </div>
  )
}

export default Trailer
