import React from "react";
import { useDataLayerValue } from "./DataLayer";
import SpotifyPlayer from 'react-spotify-web-playback'

const Controller = () => {
const [{ playing, devices, token, activePlaylist }, dispatch] = useDataLayerValue()

    return(
        <div className="controller" ><h1>Controller</h1>
        <SpotifyPlayer
  token={token}
  uris={[`${activePlaylist.uri}`]}
/></div>
    )
}

export default Controller