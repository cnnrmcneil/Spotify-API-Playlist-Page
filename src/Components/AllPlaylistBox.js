import React from "react";
import { useDataLayerValue } from "./DataLayer";

const AllPlaylistBox = () => {
    const [{ playlists, activePlaylist, songlist } , dispatch] = useDataLayerValue()
    return(
        <div className="all-playlist-box">
        {playlists?.items?.map((_playlist) => {
            return (
        <div className="imageBox"><a onClick={() => {
            dispatch ({
                type: "SET_ACTIVEPLAYLIST",
                activePlaylist: _playlist
            })
            console.log('this is songlist', songlist)
        }}>
        <img src={_playlist.images[0].url} alt='albumcover'></img>
        <div className="overlay"><p>{_playlist.name}</p></div>
        </a>
        {console.log('this is activeplaylist', activePlaylist)}
        </div>
        
        )})}
        </div>
    )
}

export default AllPlaylistBox