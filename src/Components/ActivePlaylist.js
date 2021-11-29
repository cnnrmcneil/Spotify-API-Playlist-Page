import React from "react";
import { useDataLayerValue } from "./DataLayer";

const ActivePlaylist = () => {
    const [{ activePlaylist, activePlaylistImage }, dispatch] = useDataLayerValue()
    {console.log('this is active playlist', activePlaylist)}
    return(
        <div className="active-playlist-box"><img src={activePlaylist.images[0].url}></img>
        <h5>Playlist Title</h5>
        <p>Collaborators - this can either be static or new ways of determining how to make it dynamic will need to be made<br></br>Or Collaborators can be published elsewhere, this could show some genres in the playlist</p>
        </div>
    )
}

export default ActivePlaylist