import React from "react";
import ActivePlaylist from './ActivePlaylist'
import AllPlaylistBox from './AllPlaylistBox'
import Songlist from './Songlist'
import Controller from './Controller'
import { useDataLayerValue } from "./DataLayer";

import './player.css'

const Player = () => {
    const [{ activePlaylist, songlist }, dispatch] = useDataLayerValue();
    return (
        <div><h1 className="title">Playlists</h1><div className="container">
        <div className="leftbox">
        { activePlaylist ? ( <ActivePlaylist/> ): (<div></div>)}
        <AllPlaylistBox/>
        </div>
        <div className="rightbox">
        { songlist ? (<Songlist/>): (<div></div>)}
        <Controller className="controller" />
        </div>
        </div>
        </div>
    )
}

export default Player