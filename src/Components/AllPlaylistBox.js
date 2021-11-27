import React from "react";
import { useDataLayerValue } from "./DataLayer";

const AllPlaylistBox = () => {
    const [{ playlists } , dispatch] = useDataLayerValue()
    return(
        <div className="all-playlist-box">
        {playlists?.items?.map((playlist) => {
            return (
        <div className="imageBox">
        <img src={playlist.images[0].url} alt='albumcover'></img>
        <div className="overlay"><p>{playlist.name}</p></div>
        </div>
        )})}
        </div>
    )
}

export default AllPlaylistBox