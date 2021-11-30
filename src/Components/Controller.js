import React, { useEffect } from "react";
import { useDataLayerValue } from "./DataLayer";
import SpotifyPlayer from 'react-spotify-web-playback'
import './player.css'

const styleProps = {
    trackArtistColor: 'white',
  trackNameColor: 'white',
  activeColor: 'black',
  altColor: 'white',
  bgColor: 'white',
  height: 100,
  sliderTrackBorderRadius: 100,

}

const Controller = (props) => {
    const [newNumTrack, setNewNumTrack] = React.useState(0)
    console.log('this is props', props)
    useEffect(() => {
        setNewNumTrack(props.numTrack)
    }, [props])
const [{ playing, devices, token, activePlaylist, songNumber }, dispatch] = useDataLayerValue()
    return(
        <div className="controller">
        <SpotifyPlayer styles={styleProps}
  token={token}
  uris={[`${activePlaylist.uri}`]}
  offset = {newNumTrack}
  autoPlay = {true} />
  </div>
    )}

export default Controller