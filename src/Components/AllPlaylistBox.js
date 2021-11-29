import React from "react";
import { useDataLayerValue } from "./DataLayer";

const AllPlaylistBox = () => {
    const [{ playlists, activePlaylist, songlist } , dispatch] = useDataLayerValue()
    return(
        <div className="all-playlist-box">
        {playlists?.items?.map((_playlist) => {
            return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <div className="imageBox"><a onClick={() => {
            dispatch ({
                type: "SET_ACTIVEPLAYLIST",
                activePlaylist: _playlist
            })
            dispatch ({
                type: "SET_PLAYLISTID",
                playlistID: _playlist.id
            })
            console.log('what is _playlist.id: ', _playlist.id)
            console.log('what is songlist: ', songlist)
        }}>
        <img src={_playlist.images[0].url} alt='albumcover'></img>
        <div className="overlay"><p>{_playlist.name}</p></div>
        </a>
        </div>
        
        )})}
        </div>
    )
}

export default AllPlaylistBox