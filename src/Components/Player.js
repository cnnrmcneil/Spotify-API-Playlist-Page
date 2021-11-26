import React from "react";
import ActivePlaylist from './ActivePlaylist'
import AllPlaylistBox from './AllPlaylistBox'
import Songlist from './Songlist'
import Controller from './Controller'

import './player.css'

const Player = () => {

    return (
        <div><h1 className="title">Weekend Wrecked</h1><div className="container">
        <div className="leftbox">
        <ActivePlaylist/>
        <AllPlaylistBox/>
        </div>
        <div className="rightbox">
        <Songlist/>
        <Controller className="controller" />
        </div>
        </div>
        </div>
    )
}

export default Player