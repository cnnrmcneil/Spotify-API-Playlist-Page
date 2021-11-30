import React from "react";
import { useDataLayerValue } from "./DataLayer";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

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
            spotify.getPlaylist(_playlist.id).then((playlistTracks) => {
             dispatch({
             type: "SET_SONGLIST",
             songlist: playlistTracks,
                     })
            })
        }}>
        <div className="overlay"><p>{_playlist.name}</p></div>
        <img className='albumCover' src={_playlist.images[0].url} alt='albumcover'></img>
        
        </a>
        </div>
        
        )})}
        </div>
    )
}

export default AllPlaylistBox