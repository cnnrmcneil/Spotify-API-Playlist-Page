import React from "react";
import ActivePlaylist from './ActivePlaylist'
import AllPlaylistBox from './AllPlaylistBox'
import Songlist from './Songlist'
import Controller from './Controller'
import { useDataLayerValue } from "./DataLayer";

import './player.css'

const Player = () => {
const [numTrack, setNumTrack] = React.useState(0)

    const changeFunc = (indexValue) => {
        setNumTrack(indexValue)
    }

    const [{ activePlaylist, songlist }, dispatch] = useDataLayerValue();
    return (
        <div><h1 className="title">Playlists</h1><div className="container">
        <div className="leftbox">
        { activePlaylist ? ( <ActivePlaylist/> ): (<div className='active-playlist-box'></div>)}
        <AllPlaylistBox/>
        </div>
        <div className="rightbox">
        { songlist ? (<Songlist changeFunc={changeFunc}/>): (<div className='songlist'></div>)}
        <Controller className="controller" numTrack={numTrack}/>
        </div>
        </div>
        </div>
    )
}

export default Player