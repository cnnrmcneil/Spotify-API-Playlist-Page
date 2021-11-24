import React from "react";
import './player.css'

const Player = () => {

    return(
        <div><h1 className="title">Weekend Wrecked</h1><div className="container">
        <div>
        <div className="active-playlist-box"></div>
        <div className="all-playlist-box"></div>
        </div>
        <div>
        <div className="songlist"></div>
        <div className="controller"></div>
        </div>
        </div></div>
    )
}

export default Player